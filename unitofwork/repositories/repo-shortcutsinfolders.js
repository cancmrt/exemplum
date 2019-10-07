const is = require("is_js");
const log = require('../../logger');
const objectValidate = require("object-key-validator");
var context = require("../../local-db/context");
var shortcutsinfoldersEntity = require("../../local-db/entity/shortcutsinfolders");


if(process.env.NODE_ENV == "test")
{
    context = context.test.shortcutsinfolders;
}
else{
    context = context.shortcutsinfolders;
}

var AddShortcutToFolder = function(shourtcutsinfolders,callback){
    var ModelValidate = shortcutsinfoldersEntity.shortcutsinfolders.validate(shourtcutsinfolders);
    if(ModelValidate && ModelValidate.error){
        log.logger.error(ModelValidate.error);
        callback(null);
    }
    else{
        context.insert(shourtcutsinfolders, function (err, newDoc) {
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

var FolderDeleted = function(folderId, callback){

    var deleteQuery = {
        folder_id:folderId
    }
    context.remove(deleteQuery,{}, function(err, numRemoved){
        if(err){
            log.logger.error(err);
            callback(null);
        }
        else if(is.null(numRemoved) || is.undefined(numRemoved) || is.not.number(numRemoved)){
            log.logger.error("Deleted folder shourtcuts relations are not deleting proper");
            callback(null);
        }
        else{
            callback(numRemoved);
        }
    });

}

var ShortcutDeleted = function(shortcutId, callback){

    var deleteQuery = {
        shortcut_id:shortcutId
    }
    context.remove(deleteQuery,{}, function(err, numRemoved){
        if(err){
            log.logger.error(err);
            callback(null);
        }
        else if(is.null(numRemoved) || is.undefined(numRemoved) || is.not.number(numRemoved)){
            log.logger.error("Deleted shourtcut folders relations are not deleting proper");
            callback(null);
        }
        else{
            callback(numRemoved);
        }
    });

}

module.exports = {
    AddShortcutToFolder:AddShortcutToFolder,
    FolderDeleted:FolderDeleted,
    ShortcutDeleted:ShortcutDeleted
}