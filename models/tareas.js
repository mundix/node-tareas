import { Tarea } from "./tarea.js";
import colors from 'colors';

class Tareas {

   _listado = {};

   /**
    * @return array []
    */
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


   borrarTarea(id = ''){

      if(this._listado[id]) {
         delete this._listado[id];
      }
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
      // Object.keys(this._listado).forEach((key, index) => {
      //    // console.log(index);
      //    // console.log(this._listado[key]);
      //    console.log(`${colors.green(index + 1)}. ${this._listado[key].desc} :: ${this._listado[key].completadoEn === null ? 'Pendiente'.red : 'Completado'.green}`);

      // });
      this.listadoArr.forEach( (tarea, i) => {
         const idx = `${i+1}.`.green;
         const desc = tarea.desc;
         const status = tarea.completadoEn === null ? 'Pendiente'.red : 'Completado' .green;

         console.log(`${idx} ${desc} :: ${status}`);
      })
   }

   listarPendientesCompletadas ( completadas = true)
   {
      let tareas = [];
      if(completadas) {
         tareas = this.listadoArr.filter( tarea => tarea.completadoEn !== null);
      } else {
         tareas = this.listadoArr.filter( tarea => tarea.completadoEn ===null);
      }
      tareas.forEach( (tarea, i) => {
         const idx = `${i+1}.`.green;
         const desc = tarea.desc;
         const status = tarea.completadoEn === null ? 'Pendiente'.red : 'Completado' .green;

         console.log(`${idx} ${desc} :: ${status}`);
      })
   }

   toggleCompletadas(ids = []) {

      ids.forEach( id => {
         const tarea = this._listado[id];
         if(!tarea.completadoEn) {
            tarea.completadoEn = new Date().toISOString();
         }
      });

      this.listadoArr.forEach( tarea => {

         if(!ids.includes(tarea.id)){
            this._listado[tarea.id].completadoEn = null;
         } 

      })
   }

}

export { Tareas }