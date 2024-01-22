# Application for searching and watching videos

- Deploy: https://modsenfilms-vladtarnovskiy.netlify.app/

## Structure:

1. ### Main page

   - video search
   - filtering by category
   - pagination (infinity scroll)
   - when you click on a video, a modal window with a video player opens (only video player)
   - when you click on the cards details, the Details page opens (with details information)

2. ### Details page

   - video player for watching videos
   - detailed information about the video (number of likes, views, video description)

3. ### Not found page

## Stack:

- TypeScript
- React
- styled-components
- Redux Toolkit
- webpack
- cypress (unit testing)
- jest (e2e testing)
- prettier
- eslint
- husky

## API

YouTube Data API v3

## Endpoints

- https://youtube.googleapis.com/youtube/v3/search' (to search for videos and get their IDs)
- https://www.googleapis.com/youtube/v3/videos' (to retrieve video data using found IDs)

## Scripts

### Start developer mode (support hot reload)

```
yarn dev
```

### Build application for deploy

```
yarn prod
```

### Unit testing (jest)

```
yarn test
```

### Unit testing (jest) with coverage

```
yarn test:coverage
```

### e2e testing (cypress) in console

```
yarn dev
```

```
yarn cypress:run
```

### e2e testing (cypress) in browser

```
yarn dev
```

```
yarn cypress:open
```

### Start eslint check for all files

```
yarn lint
```

### Start eslint autofix for all files

```
yarn lint:fix
```

### Start formatter autofix for all files

```
yarn format:fix
```
