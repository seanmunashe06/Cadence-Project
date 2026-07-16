#!/bin/bash

echo "Deploying Cadence Performance Platform..."

kubectl apply -f k8s/

echo "Deployment finished."