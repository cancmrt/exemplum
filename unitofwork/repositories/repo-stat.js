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


module.exports = {
    CreateStat:CreateStat
}