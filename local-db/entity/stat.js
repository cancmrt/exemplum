const Joi = require('@hapi/joi');
var stat = Joi.object({
    _id: Joi.string(),
    copied: Joi.bool().required(),
    openedincmd:Joi.bool().required(),
    openedinbrowser:Joi.bool().required(),
    shortcut_id:Joi.string().required()
});

var statRulePersistance = {
    $and:['copied','openedincmd','openedinbrowser','shortcut_id']
}
var statRuleCanbeOneOfThem = {
    $or:['copied','openedincmd','openedinbrowser','shortcut_id']
}

module.exports = {
    stat:stat,
    statRuleHaveToAllProp:statRulePersistance,
    statRuleAtLeastHaveOneProp:statRuleCanbeOneOfThem
};