import { guardarDB } from './helpers/guardarArchivo.js';
import { inquirerMenu, leerInput, pausa } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';

console.clear();

const main = async () => {

  let opt = '';
  const tareas = new Tareas();


  do {
    // Imprimir el menu
     opt = await inquirerMenu();

     switch (opt) {
      case '1':
        //crear opcion
        const desc = await leerInput('Descripción: ');
        tareas.crearTarea(desc);
        break;
     
      case '2':
        console.log(tareas.listadoArr);
        break;
     
      default:
        break;
     }

     //puedo grabar el arreglo , como tambien el _list de objeto
     guardarDB(tareas.listadoArr);


    await pausa();


  } while (opt !== '0');

}


main();  