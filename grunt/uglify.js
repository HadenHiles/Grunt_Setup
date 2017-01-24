/**
 * Created by haden on 1/6/2017.
 */
module.exports = {
    dev: {
        options: {
            mangle: false, //keep original var/function/etc names for debugging in browser
            paths: ["_assets/js/src/"],
            compress: {
                sequences: false
            }
        },
        files: {
            '_assets/js/build.min.js': ['_assets/js/src/*.js']
        }
    },
    // Uncomment and modify to suite production needs
    //production: {
    //    options: {
    //        mangle: true, // further minify files
    //        paths: ["_assets/js/src/"],
    //        compress: {
    //            sequences: false
    //        }
    //    },
    //    files: {
    //        '_assets/js/src/build.min.js': ['_assets/js/src/*.js']
    //    }
    //}
};