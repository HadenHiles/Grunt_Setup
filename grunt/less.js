/**
 * Created by haden on 1/6/2017.
 */
module.exports = {
    dev: {
        options: {
            paths: ["assets/css/src/"],
            compress: {
                sequences: false
            }
        },
        files: {
            // compilation.css  :  source.less
            "assets/css/src/build.min.css": "assets/css/src/build.less"
        }
    },
    // Uncomment and modify to suite production needs
    //production: {
    //    options: {
    //        paths: ["assets/css/src/"],
    //        compress: true
    //    },
    //    files: {
    //        "assets/css/src/build.min.css": "assets/css/src/build.less"
    //    }
    //}
};