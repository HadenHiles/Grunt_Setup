/**
 * Created by haden on 1/6/2017.
 */
module.exports = {
    dev: {
        options: {
            paths: ["assets/css/src/"],
            compress: {
                sequences: false
            },
            banner : '@charset "UTF-8";'
        },
        files: {
            // compilation.css  :  source.less
            "assets/css/build.min.css": "assets/css/build.less"
        }
    },
    // Uncomment and modify to suite production needs
    //production: {
    //    options: {
    //        paths: ["assets/css/src/"],
    //        compress: true,
    //        banner : '@charset "UTF-8";'},
    //    files: {
    //        "assets/css/src/build.min.css": "assets/css/src/build.less"
    //    }
    //}
};