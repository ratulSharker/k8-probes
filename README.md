![Dev.to blog](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) [![Docker Image CI](https://github.com/ratulSharker/k8-probes/actions/workflows/docker-image-push.yml/badge.svg)](https://github.com/ratulSharker/k8-probes/actions/workflows/docker-image-push.yml)

# k8-probes 

## Blog post:
This repository is better accompanied with the blog post [My understanding was wrong about readiness and liveliness probes](https://dev.to/ratulsharker/my-understanding-was-wrong-about-readiness-and-liveliness-probes-24n2-temp-slug-3425253?preview=739deda28dea342f9a7720b0667bfbe0b13f63061f3af1a1966ada1943bbd3e9d7366aeb1452485c3cb91319592e979d25ea055b13e44d91c721d294) and [killercoda.com](https://killercoda.com)

## Background:
For better availability of services,  kubernetes offers three type of probes:

- Startup Probe.
- Readiness Probe.
- Liveliness Probe.

To accomodate exploring these probes, requires following:

- A simple rest service.
- Containerisation of the rest service.
- Kubernetes deployment definitions.

This repository covers all above points for exploring the kubernetes probes.

## Implementation details:

**Rest Service:**
- A simple nodejs + expressjs service.
- Exposed three routes `/liveliness`, `/readiness` & `/startup`.
- Each of these routes logs with timestamp.
- Each of these routes response code can be controlled via environment variables.

**Containersation:**
- Docker is used in containerisation of the rest service.
- Used [Dockerhub](https://hub.docker.com) to store the container image.
- `docker-compose.yaml` for local testing and image pushing into [Dockerhub](https://hub.docker.com).

**Kubernetes Deployment:**
- `playground` named namespace declared in the definition.
- Environments variables are configured for response codes for routes.
- Two different deployment files added, with `startup` probe and another without `startup` probe configured.