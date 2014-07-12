var epicOpts = {
   basePath: '/epiceditor',
   focusOnLoad: true,
   autogrow: {
      minHeight: 500
   },
   clientSideStorage: true,
   theme: {
      base: '/themes/base/epiceditor.css',
      preview: '/themes/preview/github.css',
      editor: '/themes/editor/epic-dark.css'
   }
}
$(document).ready(function(){
   var origText = $("#epiceditor").text();
   var editor = new EpicEditor(epicOpts);

   editor.load(function (){
      editor.importFile('current.md', origText);
      editor.preview();
   });



});
