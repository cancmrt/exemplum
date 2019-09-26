const is = require("is_js");
const log = require('../../logger');
const objectValidate = require("object-key-validator");
var context = require("../../local-db/context");
var folderEntity = require("../../local-db/entity/folder");


if(process.env.NODE_ENV == "test")
{
    context = context.test.shortcuts;
}
else{
    context = context.shortcuts
}

var CreateFolder = function(folder,callback){
    var ModelValidate = folderEntity.folder.validate(folder);
    if(ModelValidate && ModelValidate.error){
        log.logger.error(ModelValidate.error);
        callback(null);
    }
    else{
        context.insert(folder, function (err, newDoc) {
            if(err){
                log.logger.error(err);
                callback(null);
            }
            else{
                callback(newDoc);
            }
        });
    }

}


module.exports = {
    CreateFolder:CreateFolder
}