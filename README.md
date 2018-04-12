# myapp Cordova webpack boilerplate

## Description

A boilerplate for building a simple barebones cordova project. Uses typescript & webpack

## Things to edit before building app

 - package.json
    - name
    - displayName
    - description
    - author
- config.xml
    - widget ids
    - name tags
    - Author tags

## Build system cli
A custom build script is held in the build folder. Uses webpack.
Run npm start and pass desired arguments to it

### Usage
-w --watch, Watch for changes in the src directory. Example: npm start -- -w

-e --env, Specify whether build build should be development or production, default is development. Example: npm start --env production

Enviroment can also be set by creating a TARGET enviroment variable

### Hooks
The build system for this biolerplate integrates with cordova's before_prepare hook and runs everytime this hook is triggered. Refer to cordova's [hook documentation](https://cordova.apache.org/docs/en/latest/guide/appdev/hooks/index.html) for more info