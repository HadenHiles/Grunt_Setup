/**
 * Created by haden on 1/6/2017.
 */
module.exports = {
    options: {
        nonull: true //Don't silently compile files without a warning
    },
    dev: {
        src: ['_assets/css/src/*.less'], // Add files to this array to specify important load order
        dest: '_assets/css/build.less'
    }
};