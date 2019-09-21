const Joi = require('@hapi/joi');
var shortcut = Joi.object({
    _id: Joi.string(),
    command: Joi.string().required(),
    description:Joi.string().required(),
    star: Joi.bool().required()
});
var shortcutRulePersistance = {
    $and:['command','description','star']
}
var shortcutRuleCanbeOneOfThem = {
    $or:['command','description','star']
}

module.exports = {
    shortcut:shortcut,
    shortcutRuleHaveToAllProp:shortcutRulePersistance,
    shortcutRuleAtLeastHaveOneProp:shortcutRuleCanbeOneOfThem
};