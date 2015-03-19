# A minimum single page application template

This is a minimum single page application template.

This template includes these features.

* Writing code by ES6+.
* Running unit test on browser
* Autobuild
* Livereload

## library

* React.js
    * For buiding UI.
    * http://facebook.github.io/react/
* Babel
    * For using ES6+ features and compiling JSX.
    * https://babeljs.io/
* Browserify + watchify
    * Browserify is for transforming by Babel and power-assert.
    * Watchify is used for auto build and increase transforming more faster.
    * http://browserify.org/
* Karma
    * For test runner.
    * http://karma-runner.github.io/
* BrowserSync
    * For static server and livereload.
    * http://www.browsersync.io/

## How to use

### development

```
npm start
```

You can start `watchify` and `browser-sync` and `karma`

![gif](http://i.gyazo.com/f906464bfb325437c5c905f80a5b976d.gif)

### production build

```
npm run build
```

You can generate a bundled file for production environment. (.gitignore)
This is for using in deployment step.

