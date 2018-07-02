import printMe from './print.js';
import component from './component';
import style1 from './style1.css';
import style2 from './style2.css';


document.body.appendChild(component('2424234yry',style1, style2));


//HMR interface
if(module.hot){
   //accept('xxx', ()=>{}):xxx表示的是需要监听更改的文件路径
   module.hot.accept('./print.js', function(){
      alert('0000000000');
      console.log('Accepting the updated library module!');
      printMe();
   });
}