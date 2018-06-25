export default (text='hello world333!!') => {
   const elem = document.createElement('div');
   elem.innerHTML = text;
   return elem;
}