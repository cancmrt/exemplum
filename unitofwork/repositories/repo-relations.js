const is = require("is_js");
const log = require('../../logger');

var shortcutRepository = require("./repo-shourtcut");
var statRepository = require("./repo-stat");
var folderRepository = require("./repo-folder");
var shortcutsinfoldersRepository = require("./repo-shortcutsinfolders");



var ShortcutRelationalDelete = function(shortcutId,callback){
    if(is.not.null(shortcutId) && is.not.undefined(shortcutId) && is.string(shortcutId)){
        var promiseArray = [];

        var DeletedShortcutInDb = new Promise(resolve => shortcutRepository.DeleteShortcutWithId(shortcutId,resolve));
        var DeleteShortcutInStat = new Promise(resolve => statRepository.DeleteStatWithShortcutId(shortcutId,resolve));
        var DeleteShortcutInFolders = new Promise(resolve => shortcutsinfoldersRepository.ShortcutDeleted(shortcutId,resolve));

        promiseArray.push(DeletedShortcutInDb);
        promiseArray.push(DeleteShortcutInStat);
        promiseArray.push(DeleteShortcutInFolders);

        Promise.all(promiseArray).then(function(resultsOnPromise){
            if(
                (resultsOnPromise[0] != null && resultsOnPromise[0] != undefined) &&
                (resultsOnPromise[1] != null && resultsOnPromise[1] != undefined) &&
                (resultsOnPromise[2] != null && resultsOnPromise[2] != undefined)
              )
            {
                callback(true);
            }
            else{
                log.logger.error("Error on ShortcutRelationalDelete some promises fall down");
                callback(false);
            }
        });
    }
    else{
        log.logger.error("ShortcutId parameters is not like our expected in ShortcutRelationalDelete");
        callback(false);
    }
    
}

var GetShortcutWithRelationalStats = function(shortcutId,callback){
    if(is.not.null(shortcutId) && is.not.undefined(shortcutId) && is.string(shortcutId)){

        var promiseArray = [];

        var GetShortcutWithId = new Promise(resolve => shortcutRepository.GetShortcutWithId(shortcutId,resolve));
        var GetShortcutStats = new Promise(resolve => statRepository.GetStatWithShortcutId(shortcutId,resolve));

        promiseArray.push(GetShortcutWithId);
        promiseArray.push(GetShortcutStats);

        Promise.all(promiseArray).then(function(resultsOnPromise){
            if(
                (resultsOnPromise[0] != null && resultsOnPromise[0] != undefined) &&
                (resultsOnPromise[1] != null && resultsOnPromise[1] != undefined)
              )
            {
                var shourtcutWithStat = resultsOnPromise[0];
                shourtcutWithStat["stats"] = resultsOnPromise[1];
                callback(shourtcutWithStat);
            }
            else{
                log.logger.error("Error on GetShortcutWithRelationalStats some promises fall down");
                callback(null);
            }
        });
    }
    else{
        log.logger.error("ShortcutId parameters is not like our expected in GetShortcutWithRelationalStats");
        callback(null);
    }
}
var GetFolderWithRelationalShortcuts = function(folderId,callback){
    if(is.not.null(folderId) && is.not.undefined(folderId) && is.string(folderId)){

        var promiseArray = [];

        var GetFolderWithId = new Promise(resolve => folderRepository.GetFolderWithId(folderId,resolve));
        var GetFolderShortcutRelation = new Promise(resolve => shortcutsinfoldersRepository.GetWithFolderId(folderId,resolve));

        promiseArray.push(GetFolderWithId);
        promiseArray.push(GetFolderShortcutRelation);

        Promise.all(promiseArray).then(function(resultsOnPromise){
            if(
                (resultsOnPromise[0] != null && resultsOnPromise[0] != undefined) &&
                (resultsOnPromise[1] != null && resultsOnPromise[1] != undefined)
              )
            {
                var folder = resultsOnPromise[0];
                var shortcutInFolderRelation = resultsOnPromise[1];
                if(shortcutInFolderRelation.length == 0){
                    folder["shortcuts"] = shortcutInFolderRelation;
                    callback(folder);
                }
                else{
                    var shortcutPromise = [];
                    for(var i=0; i<shortcutInFolderRelation.length; i++){
                        var shortcutResolve = new Promise(resolve => shortcutRepository.GetShortcutWithId(shortcutInFolderRelation[i].shortcut_id,resolve));
                        shortcutPromise.push(shortcutResolve);
                    }
                    Promise.all(shortcutPromise).then(function(resultShortcuts){
                        if(resultShortcuts != null && resultShortcuts != undefined)
                        {
                            folder["shortcuts"] = resultShortcuts;
                            callback(folder);
                        }
                        else{
                            log.logger.error("Error on GetFolderWithRelationalShortcuts some promises fall down while gettings shortcuts");
                        }
                        
                    });

                }
                
            }
            else{
                log.logger.error("Error on GetFolderWithRelationalShortcuts some promises fall down");
                callback(null);
            }
        });
    }
    else{
        log.logger.error("FolderId parameters is not like our expected in GetFolderWithRelationalShortcuts");
        callback(null);
    }
}

module.exports = {
    ShortcutRelationalDelete:ShortcutRelationalDelete,
    GetShortcutWithRelationalStats:GetShortcutWithRelationalStats,
    GetFolderWithRelationalShortcuts:GetFolderWithRelationalShortcuts
}