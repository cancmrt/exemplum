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

var GetWithFolderId = function(folderId,callback){
    if(is.not.null(folderId) && is.not.undefined(folderId) && is.string(folderId)){
        var findQuery = {
            folder_id:folderId
        }
        context.find(findQuery, function(err, result){
            if(err){
                log.logger.error(err);
                callback(null);
            }
            else if(is.null(result) || is.undefined(result) || is.not.array(result)){
                log.logger.error("Shortcutsinfolders db document is not coming proper on GetWithFolderId");
                callback(null);
            }
            else{
                callback(result)
            }
        });
    }
    else{
        log.logger.error("Shortcutsinfolders db folderId parameters is not like our expected");
        callback(null);
    }

}

var GetWithShortcutId = function(shortcutId,callback){
    if(is.not.null(shortcutId) && is.not.undefined(shortcutId) && is.string(shortcutId)){
        var findQuery = {
            shortcut_id:shortcutId
        }
        context.find(findQuery, function(err, result){
            if(err){
                log.logger.error(err);
                callback(null);
            }
            else if(is.null(result) || is.undefined(result) || is.not.array(result)){
                log.logger.error("Shortcutsinfolders db document is not coming proper on GetWithShortcutId");
                callback(null);
            }
            else{
                callback(result)
            }
        });
    }
    else{
        log.logger.error("Shortcutsinfolders db shortcutId parameters is not like our expected");
        callback(null);
    }

}


var FolderDeleted = function(folderId, callback){

    if(is.not.null(folderId) && is.not.undefined(folderId) && is.string(folderId)){
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
                callback(numRemoved)
            }
        });
    }
    else{
        log.logger.error("Folderid parameters is not like our expected");
        callback(null);
    }

}

var ShortcutDeleted = function(shortcutId, callback){

    if(is.not.null(shortcutId) && is.not.undefined(shortcutId) && is.string(shortcutId)){
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
                callback(numRemoved)
            }
        });
    }
    else{
        log.logger.error("Shortcutid parameters is not like our expected");
        callback(null);
    }

}

module.exports = {
    AddShortcutToFolder:AddShortcutToFolder,
    FolderDeleted:FolderDeleted,
    ShortcutDeleted:ShortcutDeleted,
    GetWithFolderId:GetWithFolderId,
    GetWithShortcutId:GetWithShortcutId

}