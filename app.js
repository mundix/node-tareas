import { inquirerMenu, pausa} from './helpers/inquirer.js';

console.clear();

const main = async () => {

   let opt = '';
   let input  = '';
   do {

     opt = await inquirerMenu();
     console.log({opt});
     input = await pausa();
     if(input === '0')  break;
     
   } while (opt !== '0');

}


main();  