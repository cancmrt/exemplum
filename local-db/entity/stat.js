const Joi = require('@hapi/joi');
var stat = Joi.object({
    _id: Joi.string(),
    copied: Joi.bool().required(),
    openedincmd:Joi.bool().required()
});

var statRulePersistance = {
    $and:['copied','openedincmd']
}
var statRuleCanbeOneOfThem = {
    $or:['copied','openedincmd']
}

module.exports = {
    stat:stat,
    statRuleHaveToAllProp:statRulePersistance,
    statRuleAtLeastHaveOneProp:statRuleCanbeOneOfThem
};