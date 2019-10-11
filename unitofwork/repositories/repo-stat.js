const is = require("is_js");
const log = require('../../logger');
const objectValidate = require("object-key-validator");
var context = require("../../local-db/context");
var statEntity = require("../../local-db/entity/stat");

if(process.env.NODE_ENV == "test")
{
    context = context.test.stats;
}
else{
    context = context.stats
}


var CreateStat = function(stat,callback){
    var ModelValidate = statEntity.stat.validate(stat);
    if(ModelValidate && ModelValidate.error){
        log.logger.error(ModelValidate.error);
        callback(null);
    }
    else{
        context.insert(stat, function (err, newDoc) {
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

var GetStatWithId = function(id,callback){
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
                log.logger.error("Stats db document is not coming proper");
                callback(null);
            }
            else{
                callback(result)
            }
        });
    }
    else{
        log.logger.error("Stats db id parameters is not like our expected");
        callback(null);
    }
}
var GetStatWithShortcutId = function(shortcutId,callback){
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
                log.logger.error("Stats db document is not coming proper");
                callback(null);
            }
            else{
                callback(result)
            }
        });
    }
    else{
        log.logger.error("Stats db shortcutId parameters is not like our expected");
        callback(null);
    }
}
var DeleteStatWithId = function(id,callback){
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
                log.logger.error("Stats db document is not deleting proper");
                callback(null);
            }
            else{
                callback(numRemoved)
            }
        });
    }
    else{
        log.logger.error("Stats db id parameters is not like our expected");
        callback(null);
    }
}
var DeleteStatWithShortcutId = function(shortcutId,callback){
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
                log.logger.error("Stats db documents is not deleting proper with shortcut_id");
                callback(null);
            }
            else{
                callback(numRemoved)
            }
        });
    }
    else{
        log.logger.error("Stats db shortcutId parameters is not like our expected");
        callback(null);
    }
}


module.exports = {
    CreateStat:CreateStat,
    GetStatWithId:GetStatWithId,
    GetStatWithShortcutId:GetStatWithShortcutId,
    DeleteStatWithId:DeleteStatWithId,
    DeleteStatWithShortcutId:DeleteStatWithShortcutId
}