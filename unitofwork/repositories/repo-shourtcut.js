const is = require("is_js");
const log = require('../../logger');
const objectValidate = require("object-key-validator");
var context = require("../../local-db/context");
var shortcutEntity = require("../../local-db/entity/shortcut");

if(process.env.NODE_ENV == "test")
{
    context = context.test.shortcuts;
}
else{
    context = context.shortcuts
}

var CreateShortcut = function(shortcut,callback){
    var ModelValidate = shortcutEntity.shortcut.validate(shortcut);
    if(ModelValidate && ModelValidate.error){
        log.logger.error(ModelValidate.error);
        callback(null);
    }
    else{
        context.insert(shortcut, function (err, newDoc) {
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
var GetShortcutWithId = function(id,callback){
    if(is.not.null(id) && is.not.undefined(id) && is.string(id)){
        var findQuery = {
            _id:id
        }
        context.findOne(findQuery, function(err, result){
            if(err){
                log.logger.error(err);
                callback(null);
            }
            else if(is.null(result) || is.undefined(result) || is.not.object(result)){
                log.logger.error("Shortcuts db document is not coming proper");
                callback(null);
            }
            else{
                callback(result)
            }
        });
    }
    else{
        log.logger.error("Shortcuts db id parameters is not like our expected");
        callback(null);
    }
}

var UpdateShortcut = function(query,update,callback){
    if(
        (is.not.null(query) && is.not.undefined(query) && is.object(query))
        &&
        (is.not.null(update) && is.not.undefined(update) && is.object(update))
      )
    {
        if(objectValidate(shortcutEntity.shortcutRuleAtLeastHaveOneProp,update))
        {
            context.update(query,{ $set: update },{}, function (err, numReplaced){
                if(err){
                    log.logger.error(err);
                    callback(null);
                }
                else if(numReplaced < 1)
                {
                    log.logger.warn("Shortcuts db update operation not effected any number of rows");
                    callback(numReplaced);
                }
                else{
                    context.persistence.compactDatafile();//for compacting result
                    callback(numReplaced);
                }
    
            });
        }
        else{
            log.logger.error("Shortcuts db sended update shortcut object is not suitable");
            callback(null);
        }
        
    }
    else{
        log.logger.error("Shortcuts db query and update parameter is not like our expected");
        callback(null)
    }
}

var DeleteShortcutWithId = function(id,callback){
    if(is.not.null(id) && is.not.undefined(id) && is.string(id)){
        var deleteQuery = {
            _id:id
        }
        context.remove(deleteQuery,{}, function(err, numRemoved){
            if(err){
                log.logger.error(err);
                callback(null);
            }
            else if(is.null(numRemoved) || is.undefined(numRemoved) || is.not.number(numRemoved)){
                log.logger.error("Shortcuts db document is not deleting proper");
                callback(null);
            }
            else{
                callback(numRemoved)
            }
        });
    }
    else{
        log.logger.error("Shortcuts db id parameters is not like our expected");
        callback(null);
    }
}

module.exports = {
    CreateShortcut:CreateShortcut,
    GetShortcutWithId:GetShortcutWithId,
    UpdateShortcut:UpdateShortcut,
    DeleteShortcutWithId:DeleteShortcutWithId
}