/**
 * Created by haden on 1/6/2017.
 * Allows for simultaneous running of tasks
 */
module.exports = {
    first: ['clean'],
    second: ['concat'],
    third: ['uglify:dev', 'less:dev']
};