const Joi = require('@hapi/joi');
var shortcutsinfolders = Joi.object({
    _id: Joi.string(),
    folder_id: Joi.string().required(),
    shortcut_id:Joi.string().required(),
});
var shortcutsinfoldersRulePersistance = {
    $and:['folder_id','shortcut_id']
}
var shortcutsinfoldersRuleCanbeOneOfThem = {
    $or:['folder_id','shortcut_id']
}

module.exports = {
    shortcutsinfolders:shortcutsinfolders,
    shortcutsinfoldersRuleHaveToAllProp:shortcutsinfoldersRulePersistance,
    shortcutsinfoldersRuleAtLeastHaveOneProp:shortcutsinfoldersRuleCanbeOneOfThem
};