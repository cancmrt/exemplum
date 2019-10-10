const is = require("is_js");
const log = require('../../logger');

var shourtcutRepository = require("./repo-shourtcut");
var statRepository = require("./repo-stat");
var shortcutsinfoldersRepository = require("./repo-shortcutsinfolders");



var ShortcutRelationalDelete = function(shortcutId,callback){
    if(is.not.null(shortcutId) && is.not.undefined(shortcutId) && is.string(shortcutId)){
        var promiseArray = [];

        var DeletedShortcutInDb = new Promise(resolve => shourtcutRepository.DeleteShortcutWithId(shortcutId,resolve));
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

        var GetShortcutWithId = new Promise(resolve => shourtcutRepository.GetShortcutWithId(shortcutId,resolve));
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

module.exports = {
    ShortcutRelationalDelete:ShortcutRelationalDelete,
    GetShortcutWithRelationalStats:GetShortcutWithRelationalStats
}