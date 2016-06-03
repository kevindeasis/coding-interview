# sports-chat
realt-time chat app demo for sports with react, and redux

# get started
install webpack and linters globally. note: copy pasting code from the web to terminal is usually a bad idea. [pastejacking](https://news.ycombinator.com/item?id=11757973)

> npm i -g webpack gulp eslint eslint-config-airbnb eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

# run lint
> eslint file1.js file2.js

## Development
> export NODE_ENV=development  //export for linux and mac and set for windows to persist
gulp //will start the development server

###Note:
the path value of contentBase property of object passed to WebpackDevServer.
the index.html of this path is the rendered SPA html by webpack.

## Staging
>setup will be prepared soon

# Docker
When using a mac we need to find the ip using:
>docker-machine ip

Find our port using one of the methods
>docker ps //get port under column name 'PORTS' or its name
or
docker port <Container_Name> <Port Number>


## Production
> webpack --config webpack.production.config.js -p

#to do immediately
> hot/live reload webpack and gulp servers simultaneously
maybe add browser sync

#to do ui/ux
>progressive img reload
responsive img

# To do dev
> universal javascript app
using inline styles
docker  build
environment settings

