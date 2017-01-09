# Summary

This grunt setup will give you:

- Simultaneous task running
- Faster website rendering
- One place source references
- Simple deployment
- Pretty console output for task execution times
- System notifications (optional)
- Step by step guide to setting up a File Watcher for Grunt in PhpStorm

## Getting Started

If you have any questions feel free to ask. [haden@geekpower.ca](mailto:haden@geekpower.ca).

### Prerequisites

[Npm](https://nodejs.org/en/download/)

```
npm -v  # should output a version number
```

Install the [Grunt command line interface](http://gruntjs.com/getting-started)

```
npm install -g grunt-cli
```

Add npm to your system path so that grunt-cli can be accessed globally

1. Search for "Environment Variables" in the control panel
2. Click "Edit environment variables for your account"
3. Modify Path to point to your npm installation (likely C:\Users\<username>\AppData\Roaming\npm)

Make sure grunt works globally

```
grunt -v
grunt-cli: The grunt command line interface (v1.2.0)

Fatal error: Unable to find local grunt.

If you're seeing this message, grunt hasn't been installed locally to
your project. For more information about installing and configuring grunt,
please see the Getting Started guide:

http://gruntjs.com/getting-started
```

_Ignore the fatal error - that's not relevant yet_

## Installing to your Project

1. Download this repo (zip)
2. Extract zip into \<sitename>/wp-content/themes/\<sitename>
3. Resolve any conflicts with existing project files
4. Compare file structure with example below

#### File structure

```
/sitename
    ./wp-content
        ./themes
            ./sitename
                ./assets
                    ./css
                        ./src
                            stylesheet.less
                            anotherstylesheet.less
                            ...
                    ./js
                        ./src
                            sourcefile.js
                            anothersourcefile.js
                            ...
                ./grunt
                    aliases.yaml
                    concat.js
                    concurrent.js
                    less.js
                    notify.js (optional)
                    uglify.js
                    ... any tasks you want
                .gitignore
                gruntfile.js
                package.json
```

#### Install Npm Modules
1. cd into your theme directory (sitename/wp-content/themes/sitename)
2. Run `npm install` _(make sure package.json is in theme dir)_

## Running

1. Navigate to your theme directory and run `grunt` or `grunt -v` for more details
2. Watch as grunt does it's magic

#### ▂▃▅▇█▓▒░ THE MORE YOU KNOW ░▒▓█▇▅▃▂

- The `concat.js` task concatenates all `.less` files within `assets/css/src` into `assets/css/src/build.less`
- The `less.js` task compresses `build.less` into build.min.css (this is the only stylesheet you need to reference)
- The `uglify.js` task concatenates and compresses all `.js` files within `assets/js/src` into `assets/js/src/build.min.js`
- `concurrent.js` specifies what tasks to run synchronously in what order, etc

## Production Deployment

_Ignore this unless you want a different development environment than the live website._

1. Uncomment "production" portion within `less.js` and `uglify.js` tasks
2. Modify "production" target tasks to suite your needs
    * Possibly a different folder structure in production
    * Additional task options
    * etc
3. Change `./grunt/concurrent.js` tasks from `less:dev` & `uglify:dev` to `less:production` & `uglify:production`
    * _Please note that "dev" and "production" are simply a target names and are not strict naming requirements

## Grunt File Watcher
See wiki

## Authors

* **Haden Hiles** - [haden@geekpower.ca](mailto:haden@geekpower.ca)

## License

This project is licensed under the MIT License. See the LICENSE.md.

## Acknowledgments

* https://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/
* http://gruntjs.com/getting-started
