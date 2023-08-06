FROM fedora:28
LABEL authors="Antoni Segura Puimedon<toni@kuryr.org>, Michał Dulko<mdulko@redhat.com>"

ARG UPPER_CONSTRAINTS_FILE="https://releases.openstack.org/constraints/upper/stein"
ARG OSLO_LOCK_PATH=/var/kuryr-lock

RUN dnf update -y \
    && dnf install -y --setopt=tsflags=nodocs python3-pip iproute bridge-utils openvswitch sudo \
    && dnf install -y --setopt=tsflags=nodocs gcc python3-devel git

COPY . /opt/kuryr-kubernetes

RUN pip3 install -c $UPPER_CONSTRAINTS_FILE /opt/kuryr-kubernetes \
    && cp /opt/kuryr-kubernetes/cni_ds_init /usr/bin/cni_ds_init \
    && mkdir -p /etc/kuryr-cni \
    && cp /opt/kuryr-kubernetes/etc/cni/net.d/* /etc/kuryr-cni \
    && dnf -y history undo last \
    && rm -rf /opt/kuryr-kubernetes \
    && mkdir ${OSLO_LOCK_PATH}

ARG CNI_DAEMON=True
ENV CNI_DAEMON ${CNI_DAEMON}
ENV OSLO_LOCK_PATH=${OSLO_LOCK_PATH}

ENTRYPOINT [ "cni_ds_init" ]
