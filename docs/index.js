const basicInfo = require('./basicInfo');
const components = require('./components');
const tasks = require('./tasks')

module.exports = {
    ...basicInfo,
    ...components,
    ...tasks
};

//en el module.exports ponemos los ... porque es un spread operator