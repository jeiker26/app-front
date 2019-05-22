# Project Title
Boilerplate para Ionic4 + Angular7 + Sass + Storybooks + Cypress.

## Project

### Base configuration

- [ ] [Angular](https://angular.io/)
- [ ] [Ionic](https://ionicframework.com)
- [ ] [Tslint](https://palantir.github.io/tslint/)
- [ ] [Prettier](https://prettier.io/)
- [ ] [Jasmine](https://jasmine.github.io/)
- [ ] [Karma](https://karma-runner.github.io/latest/index.html)
- [ ] [Phantom](http://phantomjs.org/)
- [ ] [ngx-translate](https://github.com/ngx-translate/core)
- [ ] [Protractor](https://www.protractortest.org/)
- [ ] [Storybooks](https://storybook.js.org/docs/guides/guide-angular/)
- [ ] [Angular Material](https://material.angular.io/)
- [ ] Mocks server: As an independent project with [Faker](https://github.com/marak/Faker.js/) and [json-server](https://github.com/typicode/json-server)
- [ ] [Cypress](https://www.cypress.io/)
- [ ] [Stylelint](https://stylelint.io/)
- [ ] [Sass](https://sass-lang.com/)

### Structure
#### Organization of the code

The code is structured in 5 folders within src:
- app /: code of our application, business logic.
- theme /: general styles of our application, we have to differentiate general styles and particular styles of each component
- assets /: assets of the project, later in a CDN.
- environments /: environment variables
- shared /: we will have connection with api, common interfaces, common components, ui-components, ...
    - ui-components /: library of visual components, if the project grows it can be separated into another project, ... Configured with [Storybooks](https://storybook.js.org/), we can have our own reference library :
    `` `js
    npm run storybook
    `` `

On the other hand, we have the system of mocks inside the server folder that is a completely separate project.

#### Programming structure (src / app)

The project is configured thinking of a modular structure, following a typical route tree, in this way a module will be a folder composed of the following files:
- example.module.ts
- example.page | component.ts
- example.page | component.sass
- example.page | component.html
- example.page | component.spec.ts
- components/
- modules/

It is important to know that within the components folder, only those components that belong to this module will be included, if it belonged in addition to this one, we would take it to the folder shared /components/.

The modules folder, on the other hand, is the one that will contain all those sub-paths that start from this module, for example:
If our module refers to "/users", within this module there may be another module that is user-detail and refer to the path "/users/user-example". Following this pattern we can grant the application a great readability, at least in the initial moments.

#### Utilities
The project is configured with [Tslint](https://palantir.github.io/tslint/), [Stylelint](https://stylelint.io/) and [Prettier](https://prettier.io/) so that we all have the same ways of creating code, also [husky](https://github.com/typicode/husky) has been included to check unit tests and linters before doing a push.

#### Multilanguage
This is configured [ngx-translate](https://github.com/ngx-translate/core).

#### Unit Test && Integration Test
Angular comes by default with [Jasmine](https://jasmine.github.io/), although it has been changed for configuration so that it does not load the [Karma] plugin (https://karma-runner.github.io/ latest / index.html) and carge [Phantom](http://phantomjs.org/) and appear all by console.

#### Test e2e
It has been configured [Cypress](https://www.cypress.io/) for its ease of use.

---
## Getting Started


### Requirements

- [ ] [Ionic](https://ionicframework.com)
- [ ] [Angular](https://angular.io/guide/quickstart)
- [ ] [Node](https://nodejs.org/es/)
- [ ] Npm: v6.4.1

### Installing

```
npm install
```

To run the application:

```
npm run start
```

You can see the result of the demo in [localhost:4200](http://localhost:4200)

### Running mocks server
```js
npm run mocks
```
You can see the result of the demo in [localhost:3000](http://localhost:3000)

### Running the tests

Units and integration tests:
```js
npm run test
```


E2E:
```js
npm run cypress:open
```

### Deployment

```js
npm run build
```

---

## Authors

- **Jesús Jávega**

See also the list of [contributors](https://github.com/jeiker26/app-front/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details