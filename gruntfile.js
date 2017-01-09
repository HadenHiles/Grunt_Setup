/**
 * Created by haden on 1/6/2017.
 */

module.exports = function (grunt) {

    // How long is each task taking?
    require('time-grunt')(grunt);

    // Encapsulates load-grunt-tasks to Automagically load all grunt tasks (default is ./grunt/*.js)
    require('load-grunt-config')(grunt);
};