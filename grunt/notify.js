/**
 * Created by haden on 1/6/2017.
 * Use OS notifications to inform when tasks/builds complete or fail
 */
module.exports = {
    notify: {
        concat: {
            options: {
                title: 'Build complete',  // optional
                message: '<%= pkg.name %> build finished successfully.' //required
            }
        },
        uglify: {
            options: {
                title: 'Build complete',  // optional
                message: '<%= pkg.name %> build finished successfully.' //required
            }
        },
        less: {
            options: {
                title: 'Build complete',  // optional
                message: '<%= pkg.name %> build finished successfully.' //required
            }
        }
    }
};
