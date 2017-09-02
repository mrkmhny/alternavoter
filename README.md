# AlternaVoter

> A simple instant runoff voting application

See this project live at: [https://alternavoter.netlify.com/](https://alternavoter.netlify.com/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## How things work:

- User logs in
- Pulls all the user details from DB including what polls they're involved in
- Make another call to DB to grab the related polls
- Populate the view with that data
