import 'react';

export default (text='hello world333!!', style1,style2) => {
   const elem = document.createElement('div');
   elem.innerHTML = text;
   elem.className = style1.class;


   const p = document.createElement('p');
   p.innerText = 'p line';
   p.className = style2.class;
   elem.appendChild(p);

   const input = document.createElement('input');
   input.type = 'checkbox';
   input.checked = true;
   elem.appendChild(input);
   return elem;
};