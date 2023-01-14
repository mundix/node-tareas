require('colors');

const mostrarMenu = () => {

   return new Promise(resolve => {

      console.clear();
      console.log('=============================='.green);
      console.log('    Seleccione una opción     '.yellow);
      console.log('==============================\n'.green);

      console.log(`${'1.'.green} Crear Tarea`);
      console.log(`${'2.'.green} Listar Tarea`);
      console.log(`${'3.'.green} Listar Tarea Completadas`);
      console.log(`${'4.'.green} Listar Tarea Pendiente`);
      console.log(`${'5.'.green} Completar Tarea(s)`);
      console.log(`${'6.'.green} Borrar tarea Tarea`);
      console.log(`${'0.'.green} Salir \n`);

      const readline = require('readline').createInterface({
         input: process.stdin,
         output: process.stdout
      });

      readline.question('Seleccione una opción: ', (opt) => {
         readline.close();
         resolve(opt);
      });

   });



}


const pausa = () => {

   return new Promise(resolve => {
      const readline = require('readline').createInterface({
         input: process.stdin,
         output: process.stdout
      });

      readline.question(`Presione ${'ENTER'.green} para continuar`, (opt) => {
         readline.close();
         resolve();
      });
   })

}

module.exports = {
   mostrarMenu,
   pausa
}