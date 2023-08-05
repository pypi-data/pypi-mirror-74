let editors = [];

let config = {};
if (typeof _config !== 'undefined')	config = _config;

document.addEventListener("DOMContentLoaded", () => {
  let _editors = document.querySelectorAll('.editor');
  for (let i=0; i < _editors.length; ++i) {
    ClassicEditor
      .create( _editors[i], config )
      .then( editor => {
        editors.push(editor);
      })
      .catch( err => {
        console.error( err.stack );
      });
  }
  window.editors = editors;
});
