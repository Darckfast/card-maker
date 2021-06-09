# Card maker
![Demo](.github/demo.png)

## What is included in this repo?

This repo include the following libs/framework/features:

### Libraries
* ReactJS
* TypeScript 4
* styled-components
* commitlint
* eslint
* prettier

### Frameworks
* NextJS (10)

## How to run

```bash
yarn #this will install all deps
yarn dev #this will run the app on localhost:3000
```

## Building
With NextJS there is a couple way to build/deploy an app.

### With Docker

The Dockerfile in this repo was extracted from [NextJS Docs](https://nextjs.org/docs/deployment#docker-image)

```bash
docker build -t docker_image_name .
docker run -p 3000:3000 -it docker_image_name
```

### With static pages

This will output the builded app in `/out` as static pages

```
yarn build:static
```
