/**
 * Created by haden on 1/6/2017.
 */
module.exports = {
    dev: {
        options: {
            mangle: false, //keep original var/function/etc names for debugging in browser
            paths: ["assets/js/src/"],
            compress: {
                sequences: false
            }
        },
        files: {
            'assets/js/build.min.js': ['assets/js/src/*.js']
        }
    },
    // Uncomment and modify to suite production needs
    //production: {
    //    options: {
    //        mangle: true, // further minify files
    //        paths: ["assets/js/src/"],
    //        compress: {
    //            sequences: false
    //        }
    //    },
    //    files: {
    //        'assets/js/src/build.min.js': ['assets/js/src/*.js']
    //    }
    //}
};