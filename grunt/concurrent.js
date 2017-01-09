/**
 * Created by haden on 1/6/2017.
 * Allows for simultaneous running of tasks
 */
module.exports = {
    first: ['concat'],
    second: ['uglify:dev', 'less:dev']
};