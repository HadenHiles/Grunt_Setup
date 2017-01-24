/**
 * Created by haden on 1/6/2017.
 */
module.exports = {
    dev: {
        options: {
            paths: ["_assets/css/src/"],
            compress: {
                sequences: false
            },
            banner : '@charset "UTF-8";'
        },
        files: {
            // compilation.css  :  source.less
            "_assets/css/build.min.css": "_assets/css/build.less"
        }
    },
    // Uncomment and modify to suite production needs
    //production: {
    //    options: {
    //        paths: ["_assets/css/src/"],
    //        compress: true,
    //        banner : '@charset "UTF-8";'},
    //    files: {
    //        "_assets/css/src/build.min.css": "_assets/css/src/build.less"
    //    }
    //}
};