const inquirer = require('inquirer');
require('colors');

const inquirerMenu = async () => {
   console.clear();
   console.log('=============================='.green);
   console.log('    Seleccione una opción     '.yellow);
   console.log('==============================\n'.green);
}

module.exports = {
   inquirerMenu
}