# PwaPushTest

Progressive Web App build with Angular 4. Some PWA tests: installable, offline support, push message and handling of incoming messages

## Build

The ServiceWorker only works if the app is build with --prod flag

Build with:

`npm run build:dev`

or 

`npm run build:acc`

or 

`npm run build:prod`

## Firebase deploy

3 available firebase-apps: PWA Test Dev, PWA Test Acc and PWA Test Prod

To Deploy

`firabase init`

`firebase use` Chose the right firebase-app

`firebase deploy`
