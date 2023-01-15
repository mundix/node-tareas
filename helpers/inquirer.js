// const inquirer = require('inquirer');
import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
   {
      type: 'list',
      name: 'opcion',
      message: 'Que desea hacer?',
      choices: [
         {
            value: '1',
            name: '1. Crear tarea'
         },
         {
            value: '2',
            name: '2. Listar tarea'
         },
         {
            value: '3',
            name: '3. Listar tareas completadas'
         },
         {
            value: '4',
            name: '4. Listar tareas Pendientes'
         },
         {
            value: '5',
            name: '5. Completar Tareas'
         },
         {
            value: '6',
            name: '6. Borrar tarea'
         },
         {
            value: '0',
            name: '0. Salir'
         },
      ]
   }
];



const inquirerMenu = async () => {
   // console.clear();
   console.log('=============================='.green);
   console.log('    Seleccione una opción     '.yellow);
   console.log('==============================\n'.green);

   const { opcion } = await inquirer.prompt(preguntas);
   return opcion;
}

const pausa = async () => {

   const entrada = [
      {
         type: 'input',
         name: 'valor',
         message: `Presione ${'ENTER'.green} para continuar:`,
      },
   ];

   const { valor } = await inquirer.prompt(entrada);
   return valor;
}

const leerInput = async (message) => {
   const question = [
      {
         type: 'input',
         name: 'desc',
         message,
         validate(value) {
            if (value.length === 0) {
               return 'Por favor ingrese un valor';
            }
            return true;
         }
      }
   ]

   const { desc } = await inquirer.prompt(question);
   return desc;
}

export { inquirerMenu, pausa, leerInput };