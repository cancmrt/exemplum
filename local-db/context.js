var Datastore = require('nedb');
var shortcuts = new Datastore({ filename: 'documents/shortcuts.nedb', autoload: true });
var stats = new Datastore({ filename: 'documents/stats.nedb', autoload: true });
var folders = new Datastore({ filename: 'documents/folders.nedb', autoload: true });

var shortcutsTest = new Datastore({ filename: 'documents-tests/shortcuts.nedb', autoload: true });
var statsTest = new Datastore({ filename: 'documents-tests/stats.nedb', autoload: true });
var foldersTest = new Datastore({ filename: 'documents-tests/folders.nedb', autoload: true });

module.exports = {
    shortcuts: shortcuts,
    stats: stats,
    folders: folders,
    test:{
        shortcuts:shortcutsTest,
        stats:statsTest,
        folders:foldersTest
    }
}