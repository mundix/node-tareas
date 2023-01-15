import { Tarea } from "./tarea.js";
import colors from 'colors';

class Tareas {

   _listado = {};

   get listadoArr() {
      const listado = [];

      Object.keys(this._listado).forEach(key => {
         const tarea = this._listado[key];
         listado.push(tarea);
      })

      return listado;
   }

   constructor() {
      this._listado = {};
   }

   cargarTareasFromArray(tareas = []) {
      // Object.keys(tareas).forEach( key => {
      //    this._listado[key] = tareas[key];
      // })
      //Otra forma que funcinoa igual
      tareas.forEach(tarea => {
         this._listado[tarea.id] = tarea;
      })
   }

   crearTarea(desc = '') {
      const tarea = new Tarea(desc);
      this._listado[tarea.id] = tarea;
   }


   listadoCompleto() {
      Object.keys(this._listado).forEach((key, index) => {
         // console.log(index);
         // console.log(this._listado[key]);
         console.log(`${colors.green(index + 1)}. ${this._listado[key].desc} :: ${this._listado[key].completadoEn === null ? 'Pendiente'.red : 'Completado'.green}`);

      });
   }

}

export { Tareas }