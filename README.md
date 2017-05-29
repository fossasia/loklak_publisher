# LoklakMessagePublisher
[![Build Status](https://travis-ci.org/SarishiNoHara/message-publisher.svg?branch=master)](https://travis-ci.org/SarishiNoHara/message-publisher)

This project was generated with [Angular CLI](https://github.com/angular/ngular-cli) version 1.0.2.

## Development server
### Localhost
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Google Cloud

1. Build the image:

    `docker build . -t gcr.io/[project-id]/message-publisher:v1`

2. Push to Google Cloud:

    `gcloud docker -- push gcr.io/[project-id]/message-publisher:v1`

3. Deploy the web application:

    `gcloud app deploy --image-url gcr.io/[project-id]/message-publisher:v1`

4. View application in browser:

    `gcloud app browse`
#### Demo
[https://loklak-167617.appspot.com/](https://loklak-167617.appspot.com/)


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
