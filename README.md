# Deploying the API to GKE using Cloud Shell and Google Cloud GUI

## Building the Docker Image
Run `docker build` to build an image from the Dockerfile. Prefix the name with gcr.io because that's where we're going to host the image later.

## Deploying to GKE
1. Push Docker Image to Google Container Registry (GCR).
    Run `docker push` to push the created image onto GCR.
2. Create GKE Cluster
    This can easily be done in the GKE interface - Clusters.
3. Deploy API onto GKE
    This can easily be done in the GKE interface - Workloads. Be sure to specify the container image to be the image pushed onto GCR.
