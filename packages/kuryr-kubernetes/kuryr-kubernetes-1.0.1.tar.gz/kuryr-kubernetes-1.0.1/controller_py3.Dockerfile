FROM fedora:28
LABEL authors="Antoni Segura Puimedon<toni@kuryr.org>, Michał Dulko<mdulko@redhat.com>"

ARG UPPER_CONSTRAINTS_FILE="https://releases.openstack.org/constraints/upper/stein"

RUN dnf update -y \
    && dnf install -y --setopt=tsflags=nodocs python3-pip \
    && dnf install -y --setopt=tsflags=nodocs gcc python3-devel git

COPY . /opt/kuryr-kubernetes

RUN pip3 install -c $UPPER_CONSTRAINTS_FILE --no-cache-dir /opt/kuryr-kubernetes \
    && dnf -y history undo last \
    && rm -rf /opt/kuryr-kubernetes \
    && groupadd -r kuryr -g 711 \
    && useradd -u 711 -g kuryr \
         -d /opt/kuryr-kubernetes \
         -s /sbin/nologin \
         -c "Kuryr controller user" \
         kuryr

USER kuryr
CMD ["--config-dir", "/etc/kuryr"]
ENTRYPOINT [ "/usr/local/bin/kuryr-k8s-controller" ]
