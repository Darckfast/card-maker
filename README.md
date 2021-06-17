# Card maker

[![Reddit post](https://card-maker-darckfast.vercel.app/api/card?name=*cries%20in%20powershell*&description=You%20start%20automating%20it%2C%20and%20when%20you%20realize%20it%27s%20not%20going%20to%20happen%2C%20you%27re%20like%3A%20%22I%20already%20spend%20so%20much%20time%20automating%20it%2C%20better%20continue%20so%20I%20will%20never%20have%20to%20do%20it%20manually%20again%22...&backgroundColor=%234744CB&innerBackgroundColor=%23ABB3FC&imgSrc=https%3A%2F%2Fi.redd.it%2F2ialma4xoiv41.jpg&holo%5Benabled%5D=true&holo%5Bsrc%5D=https%3A%2F%2Fi.imgur.com%2FQPzHsAF.png&sparkles%5Benabled%5D=false&sparkles%5Bsrc%5D=https%3A%2F%2F64.media.tumblr.com%2F2541216cdf5738dd5b0c32a0b6737c4f%2Ftumblr_opno5nZGCT1vsjcxvo1_r1_540.gifv)](https://www.reddit.com/r/ProgrammerHumor/comments/g9j8c6/cries_in_powershell/)

## What is included in this repo?

This repo include the following libs/framework/features:

### Libraries

- ReactJS
- TypeScript 4
- styled-components
- commitlint
- eslint
- prettier

### Frameworks

- NextJS (10)

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
