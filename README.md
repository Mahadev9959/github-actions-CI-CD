
# Node.js CI/CD Pipeline with GitHub Actions

## Project Overview
This project automates the testing, Docker image building, and publishing of a Node.js application using GitHub Actions.

## Technologies Used
- Node.js
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub

## CI/CD Workflow
1. Code is pushed to the `main` branch.
2. GitHub Actions checks out the source code.
3. Node.js dependencies are installed.
4. Automated tests run.
5. Docker Hub authentication is performed using GitHub Secrets.
6. The Docker image is built and pushed to Docker Hub.

## Run Locally
Install dependencies:
```bash
npm ci
```

Run tests:
```bash
npm test
```

Start the application:
```bash
npm start
```

## Docker Image
Docker Hub: https://hub.docker.com/r/shravanidevops/github-actions-nodejs-cicd

## GitHub Actions
https://github.com/Mahadev9959/github-actions-CI-CD/actions

