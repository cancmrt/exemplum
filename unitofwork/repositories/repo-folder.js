const is = require("is_js");
const log = require('../../logger');
const objectValidate = require("object-key-validator");
var context = require("../../local-db/context");
var folderEntity = require("../../local-db/entity/folder");


if(process.env.NODE_ENV == "test")
{
    context = context.test.folders;
}
else{
    context = context.folders;
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

var GetFolderWithId = function(id,callback){
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
                log.logger.error("Folders db document is not coming proper");
                callback(null);
            }
            else{
                callback(result)
            }
        });
    }
    else{
        log.logger.error("Folders db id parameters is not like our expected");
        callback(null);
    }
}

var UpdateFolder = function(query,update,callback){
    if(
        (is.not.null(query) && is.not.undefined(query) && is.object(query))
        &&
        (is.not.null(update) && is.not.undefined(update) && is.object(update))
      )
    {
        if(objectValidate(folderEntity.folderRuleAtLeastHaveOneProp,update))
        {
            context.update(query,{ $set: update },{}, function (err, numReplaced){
                if(err){
                    log.logger.error(err);
                    callback(null);
                }
                else if(numReplaced < 1)
                {
                    log.logger.warn("FOlders db update operation not effected any number of rows");
                    callback(numReplaced);
                }
                else{
                    context.persistence.compactDatafile();//for compacting result
                    callback(numReplaced);
                }
    
            });
        }
        else{
            log.logger.error("Folders db sended update shortcut object is not suitable");
            callback(null);
        }
        
    }
    else{
        log.logger.error("Folders db query and update parameter is not like our expected");
        callback(null)
    }
}

var DeleteFolderWithId = function(id,callback){
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
                log.logger.error("Folders db document is not deleting proper");
                callback(null);
            }
            else{
                callback(numRemoved)
            }
        });
    }
    else{
        log.logger.error("Folders db id parameters is not like our expected");
        callback(null);
    }
}


module.exports = {
    CreateFolder:CreateFolder,
    GetFolderWithId:GetFolderWithId,
    UpdateFolder:UpdateFolder,
    DeleteFolderWithId:DeleteFolderWithId
}