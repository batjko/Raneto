var fs = require('fs');

var getFileContent = function(filepath){
      fs.readFile(filePath, function(err,data){
         if (err)
            return err;
         else
            return data;
      });
};

module.exports = getFileContent;
