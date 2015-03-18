# A minimum single page application template

This is a minimum single page application template.
This is built by some useful libraries.

## library

* React.js
    * for buiding UI.
    * http://facebook.github.io/react/
* Babel
    * for using ES6+ features and transpile JSX.
    * https://babeljs.io/
* Browserify + watchify
    * for transform Babel and power-assert.
    * watchify is used autobuild and transforming more faster.
    * http://browserify.org/
* Karma
    * for test runner.
    * http://karma-runner.github.io/
* BrowserSync
    * for static server and livereload.
    * http://www.browsersync.io/

## How to use

### development

```
npm start
```

start `watchify` and `browser-sync` and `karma`

![gif](http://i.gyazo.com/f906464bfb325437c5c905f80a5b976d.gif)

### production build

```
npm run build
```

generate a production build file.

