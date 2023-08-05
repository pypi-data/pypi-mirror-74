let editors = [];

document.addEventListener("DOMContentLoaded", () => {
  let _editors = document.querySelectorAll('.editor');
  for (let i=0; i < _editors.length; ++i) {

  DecoupledEditor
    .create( _editors[i], {
      // toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
    })
    .then( editor => {
      const toolbarContainer = document.querySelector( '.toolbar-container' );
      toolbarContainer.appendChild( editor.ui.view.toolbar.element );
      editors.push(editor);
    })
    .catch( err => {
      console.error( err.stack );
    });
  }
  window.editors = editors;
});
