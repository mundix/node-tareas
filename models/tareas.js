import { Tarea } from "./tarea.js";

class Tareas {

   _listado = {};

   get listadoArr() {
      const listado = [];

      Object.keys(this._listado).forEach( key => {
         const tarea = this._listado[key];
         listado.push(tarea);
      })

      return listado;
   }

   constructor() {
      this._listado = {};
   }

   cargarTareasFromArray( tareas = []) {
      // Object.keys(tareas).forEach( key => {
      //    this._listado[key] = tareas[key];
      // })
      //Otra forma que funcinoa igual
      tareas.forEach(  tarea => {
         this._listado[tarea.id] = tarea;
      })
   }

   crearTarea(desc = '') {
      const tarea = new Tarea(desc);
      this._listado[tarea.id] = tarea;
   }
}

export { Tareas }