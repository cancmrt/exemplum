
var shourtcutRepository = require("./repositories/repo-shourtcut");
var statRepository = require("./repositories/repo-stat");
var folderRepository = require("./repositories/repo-folder");
var shortcutsinfoldersRepository = require("./repositories/repo-shortcutsinfolders");
var relationsRepository = require("./repositories/repo-relations");

module.exports = {
    ShortcutRepository: shourtcutRepository,
    StatRepository:statRepository,
    FolderRepository:folderRepository,
    ShortcutsInFolders:shortcutsinfoldersRepository,
    RelationsRepository:relationsRepository
}