import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { confirmar, inquirerMenu, leerInput, listadoTareasBorrar, mostrarListadoChecklist, pausa } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';

console.clear();

const main = async () => {

  let opt = '';
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) { // Cargar Tareas
    tareas.cargarTareasFromArray(tareasDB);
  }


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
        tareas.listadoCompleto()
        break;

      case '3':
        tareas.listarPendientesCompletadas();
        break;

      case '4':
        tareas.listarPendientesCompletadas(false);
        break;

      case '5':
          const ids = await mostrarListadoChecklist(tareas.listadoArr);
          console.log({ids});
        break;

      case '6':
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== '0') {

          const ok = await confirmar('Estas seguro?');
          if (ok) {
            tareas.borrarTarea(id);
            console.log('Tarea Borrada');
          }
        }

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