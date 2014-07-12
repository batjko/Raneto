   var epicOpts = {
      basePath: '/epiceditor',
      theme: {
         base: '/themes/base/epiceditor.css',
         preview: '/themes/preview/github.css',
         editor: '/themes/editor/epic-dark.css'
      }
   }

   /*  Initialize Editor  */
   $(document).ready(function(){
      var editor = new EpicEditor(epicOpts);
      //console.dir(editor);
      $('#loadEdit').click(function(){
         console.info("Edit button clicked.");

         editor.load(function (){
            console.info("Editor loaded. Trying to get content...");

            //TODO: Need to get file content from Express

         });

      });
   });
