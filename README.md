[![Build Status](https://travis-ci.org/ngParty/Angular1-scaffold.svg?branch=master)](https://travis-ci.org/ngParty/Angular1-scaffold)
[![GitHub version](https://badge.fury.io/gh/ngParty%2FAngular1-scaffold.svg)](https://badge.fury.io/gh/ngParty%2FAngular1-scaffold)
[![Dependency Status](https://david-dm.org/ngParty/Angular1-scaffold.svg)](https://david-dm.org/ngParty/Angular1-scaffold)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ngParty/Angular1-scaffold/master/LICENSE)

# Angular 1 TypeScript Scaffold [![Join Slack](https://img.shields.io/badge/slack-join-brightgreen.svg)](https://ngparty.herokuapp.com)

![ngparty-scaffold-logo](https://cloud.githubusercontent.com/assets/1223799/15454478/db5b45f6-2039-11e6-8a24-315656d53b6d.png)

> The de facto starter repo for building scalable and Angular 2 migration ready apps with Angular, Typescript 2.x, ng-metadata and Webpack 1.x

This seed repo serves as a minimal starter for anyone looking to get up and running with Angular 1 and Typescript fast.
It uses Webpack for the build process, which is highly maintainable, fast and modular build system.

**Features:**

- [x] un-opinionated directory/file structure ( we recommend to follow [Angular 2 styleguide](https://angular.io/styleguide) )
- [x] Ready to go build system using [Webpack](https://webpack.github.io/) for working with TypeScript
- [x] great Angular 1 seed repo for anyone who wants to start their project and be ready for migration to Angular 2.
- [x] Angular code powered by [ng-metadata](https://github.com/ngParty/ng-metadata) which allows you to write angular 2 ready code with angular 1
- [x] includes TSlint and [Codelyzer](https://github.com/mgechev/codelyzer) so it will tell you if your code is not following Angular 2 styleguide
- [x] testing Angular code with Jasmine and Karma.
- [x] coverage with Istanbul and Karma
- [x] type manager with npm ( via [@types](https://www.npmjs.com/~types )
- [x] Sass support ( you can add your own preprocessor pretty easily )
- [x] source maps support
- [x] [UI-Router](https://github.com/ngParty/Angular1-scaffold/tree/ui-router) ( for this we have separate branch, because we don't want to force you to use it ;) )
- [x] ~~[Component Router](https://github.com/ngParty/Angular1-scaffold/tree/component-router)~~ ( for this we have separate branch, because we don't want to force you to use it ;) ) *NOTE* this is deprecated since angular team dropped router support to ng1
- [ ] ngUpgrade + Angular 2 integration within build

### Static analysis via Typescript and Codelyzer ( exactly like with Angular 2 ):

![ng-metadata-with-codelyzer-on-steroids](https://cloud.githubusercontent.com/assets/1223799/21472541/fd7f804c-cadf-11e6-94ae-62c4682c76f8.gif)


## Install

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth=1 https://github.com/ngParty/Angular1-scaffold.git <your-project-name>

# change directory to our repo
cd <your-project-name>

# install all dependencies locally ( global is evil ! )
npm install
```

## Start Development

```bash
# start the server, webpack ( which runs Typescript compilation and linting with TSlint and Codelyzer )
npm start

open http://localhost:9000
```

## Testing

```bash
# for running test once
npm test

# for running tests in watch mode
npm run test:watch
```

## Production build

```bash
npm run build
```

check your production ready application within `/dist`

**NOTE:**
If you need to include any assets like images, custom fonts etc. place them withing `src/assets`

This folder will be copied and flattened to your `/dist`. so as an example:
`/src/assets/images/hello.png` -> `/dist/images/hello.png`

For these reasons use `images/pluto-the-planet.jpg` path when directly referencing assets withing your html


### Adding 3rd party libraries

```bash
npm install --save <your-library-name>
```

If it doesn't ship with type definitions, you need to download them via [npm @types](#customtypedefinitions)

now just `import` what you need via `es2015` module syntax

### Custom Type Definitions

When including 3rd party modules you also need to include the type definition for the module if they don't provide one within the module.
You can install it with npm:

```bash
npm install --save @types/moment
```

If there isn't a type definition for your 3rd party library, which is very unlikely, you can place your own custom global type definitions within `src/globals.d.ts`

For example:

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```

If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```

You can include your type definitions in this file until you create one for the @types npm registry

### Proposed File structure

```
src/
 ├──app/                   * WebApp: folder, our source files that will be compiled to javascript
 │   │--shared/            * Do put all shared files within a component feature in a shared folder.
 |   |   |-- exception.service.ts
 |   |   |-- exception.service.spec.ts
 |   |   |-- shared.module.ts * shared module with all shared declarations and providers
 |   |   |-- index.ts             * barrel file
 │   |--app.module.ts      * angular module
 │   |--app.component.ts   * root component
 │   │──app.spec.ts        * a simple test of components in app.ts
 │   │──index.ts           * barrel file
 │   │
 │──assets/                * static assets are served here
 │   ├──icon/              * our list of icons from www.favicon-generator.org
 │   ├──images/            * our custom app images
 │   ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
 │   ├──robots.txt         * for search engines to crawl your website
 │   └──human.txt          * for humans to know who the developers are
 |──main.ts        * our entry file for our browser environment
 │
 |──index.html     * Index.html: where we generate our index page
 │
 |──polyfills.ts   * our polyfills file
 │
 |──vendor.ts      * our vendor file
 |
 |──globals.d.ts   * our custom global type definitions
```

> What is a [barrel file](https://angular.io/styleguide#!#create-and-import-barrels) ?

### Code snippets

Be efficient, we have [code snippets](https://github.com/ngParty/jetbrains-angular1-snippets) for you my friend!

### Data flow and state management

We highly recommend to go fully reactive by embracing [Redux](https://github.com/angular-redux/ng-redux) or [RxJs](http://reactivex.io/rxjs/) or both!
From architectural point Smart and Dumb components, is the way to go!

Have fun!


Created with &#10084; by ngParty team.
