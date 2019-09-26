const Joi = require('@hapi/joi');
var folder = Joi.object({
    _id: Joi.string(),
    folderName: Joi.string().required(),
    star:Joi.bool().required()
});

var folderRulePersistance = {
    $and:['folderName','star']
}
var folderRuleCanbeOneOfThem = {
    $or:['folderName','star']
}

module.exports = {
    folder:folder,
    folderRuleHaveToAllProp:folderRulePersistance,
    folderRuleAtLeastHaveOneProp:folderRuleCanbeOneOfThem
};