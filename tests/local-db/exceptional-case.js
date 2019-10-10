process.env.NODE_ENV = 'test';

//var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

describe("Local Database crud operations on shortcuts exceptional cases",function(){
    it("Should give error when adding shortcut.command prop is missing",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.description prop is missing",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.star prop is missing",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google"
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.command different data type except string(number)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: 1,
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.command different data type except string(bool)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: true,
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.command different data type except string(null)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: null,
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });   
    it("Should give error when adding shortcut.command different data type except string(undefined)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: undefined,
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.command different data type except string(object)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: {},
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding null data type",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutRepository.CreateShortcut(null,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding undefined data type",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutRepository.CreateShortcut(undefined,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.description different data type except string(number)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: 1,
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.description different data type except string(negative number)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: -1,
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.description different data type except string(null)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: null,
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.description different data type except string(undefined)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: undefined,
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.description different data type except string(bool)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: true,
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.description different data type except string(object)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: {},
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });    
    it("Should give error when adding shortcut.star different data type except bool(string)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: 1,
            star:"true"
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.star different data type except bool(number)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google",
            star:1
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.star different data type except bool(null)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google",
            star:null
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding shortcut.star different data type except bool(undefined)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google",
            star:undefined
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });  
    it("Should give error when adding shortcut.star different data type except bool(object)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google",
            star:{}
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });    
    it("Should give error when adding shortcut.star different data type except bool(negative number)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google",
            star:-1
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });    
    

    it("Should give error when shortcut entity getting with id parameter is null",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.GetShortcutWithId(null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when shortcut entity getting with id parameter is undefined ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.GetShortcutWithId(undefined,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when shortcut entity getting with id parameter is number ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.GetShortcutWithId(1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when shortcut entity getting with id parameter is bool ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.GetShortcutWithId(true,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when try update shortcut entity with null ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });
    it("Should give error when try update shortcut entity with string ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,"undefined",function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });
    it("Should give error when try update shortcut entity with number ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });
    it("Should give error when try update shortcut entity with bool ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,false,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });
    it("Should give error when try update shortcut entity with undefined ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,undefined,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });
    it("Should give error when try update shortcut entity with different prop not included in shortcut entity ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        var diffProp = {
            isteOyleBirSey: "Erol Evgin"
        }
        unitOfWork.ShortcutRepository.UpdateShortcut(query,diffProp,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });

    it("Should give error when shortcut deleting with id parameter is null",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.DeleteShortcutWithId(null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when shortcut deleting with id parameter is undefined ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.DeleteShortcutWithId(undefined,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when shortcut deleting with id parameter is number ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.DeleteShortcutWithId(1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when shortcut deleting with id parameter is bool ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.DeleteShortcutWithId(true,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
});
describe("Local Database crud operations on stats exceptional cases",function(){

    it("Should give error when adding stat.copied prop is missing",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            openedincmd:true,
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.openedincmd prop is missing",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.openedinbrowser prop is missing",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            openedincmd:true,
            copied:true,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.shortcut_id prop is missing",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:false,
            openedincmd:true,
            openedinbrowser:false
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.copied prop is different than bool(string)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:"truee",
            openedincmd:true,
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            console.log(newValue);
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.copied prop is different than bool(number)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:1,
            openedincmd:true,
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.copied prop is different than bool(object)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:{},
            openedincmd:true,
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.copied prop is different than bool(undefined)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:undefined,
            openedincmd:true,
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.copied prop is different than bool(null)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:null,
            openedincmd:true,
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat property as a null",function(done){
        var unitOfWork = require("../../unitofwork");

        unitOfWork.StatRepository.CreateStat(null,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat property as a undefined",function(done){
        var unitOfWork = require("../../unitofwork");

        unitOfWork.StatRepository.CreateStat(undefined,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat property as a empty object",function(done){
        var unitOfWork = require("../../unitofwork");

        unitOfWork.StatRepository.CreateStat({},function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });

    it("Should give error when adding stat.openedincmd prop is different than bool(string)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:"truee",
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.openedincmd prop is different than bool(number)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:1,
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.openedincmd prop is different than bool(object)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:{},
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.openedincmd prop is different than bool(undefined)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:undefined,
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.openedincmd prop is different than bool(null)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:null,
            openedinbrowser:false,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });

    it("Should give error when adding stat.openedinbrowser prop is different than bool(string)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:false,
            openedinbrowser:"truee",
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.openedinbrowser prop is different than bool(number)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:false,
            openedinbrowser:1,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.openedinbrowser prop is different than bool(object)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:false,
            openedinbrowser:{},
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.openedinbrowser prop is different than bool(undefined)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:false,
            openedinbrowser:undefined,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.openedinbrowser prop is different than bool(null)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:false,
            openedinbrowser:null,
            shortcut_id:"90x5w08W3PGk2ctm"
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });

    it("Should give error when adding stat.shortcut_id prop is different than string(bool)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:false,
            openedinbrowser:false,
            shortcut_id:true
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.shortcut_id prop is different than string(number)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:false,
            openedinbrowser:false,
            shortcut_id:1
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.shortcut_id prop is different than string(object)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:false,
            openedinbrowser:false,
            shortcut_id:{}
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.shortcut_id prop is different than string(undefined)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:false,
            openedinbrowser:false,
            shortcut_id:undefined
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding stat.shortcut_id prop is different than string(null)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newStat = {
            copied:true,
            openedincmd:false,
            openedinbrowser:false,
            shortcut_id:null
        };
        unitOfWork.StatRepository.CreateStat(newStat,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });

    it("Should give error when stat entity getting with id parameter is null",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.GetStatWithId(null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when stat entity getting with id parameter is undefined ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.GetStatWithId(undefined,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when stat entity getting with id parameter is number ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.GetStatWithId(1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when stat entity getting with id parameter is bool ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.GetStatWithId(true,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });

    it("Should give error when stat entity getting with shortcut_id parameter is null",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.GetStatWithShortcutId(null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when stat entity getting with shortcut_id parameter is undefined ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.GetStatWithShortcutId(undefined,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when stat entity getting with shortcut_id parameter is number ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.GetStatWithShortcutId(1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when stat entity getting with shortcut_id parameter is bool ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.GetStatWithShortcutId(true,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });


    it("Should give error when stat entity deleting with id parameter is null",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.DeleteStatWithId(null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when stat entity deleting with id parameter is undefined ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.DeleteStatWithId(undefined,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when stat entity deleting with id parameter is number ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.DeleteStatWithId(1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when deleting stat entity with id parameter is bool ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.DeleteStatWithId(true,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });

    it("Should give error when stat entity deleting with shortcut_id parameter is null",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.DeleteStatWithShortcutId(null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when stat entity deleting with shortcut_id parameter is undefined ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.DeleteStatWithShortcutId(undefined,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when stat entity deleting with shortcut_id parameter is number ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.DeleteStatWithShortcutId(1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when stat entity deleting with shortcut_id parameter is bool ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.DeleteStatWithShortcutId(true,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });

    

});
describe("Local Database crud operations on folders exceptional cases",function(){

    it("Should give error when adding folder.folderName prop is missing",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            star:true
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder.star prop is missing",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            folderName:"Docker"
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder.folderName prop is different than string(bool)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            folderName:true,
            star:true
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            console.log(newValue);
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder.folderName prop is different than string(number)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            folderName:1,
            star:true
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder.folderName prop is different than string(object)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            folderName:{},
            star:true
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder.folderName prop is different than string(undefined)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            folderName:undefined,
            star:true
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder.folderName prop is different than string(null)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            folderName:null,
            star:true
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder entity as a null",function(done){
        var unitOfWork = require("../../unitofwork");

        unitOfWork.FolderRepository.CreateFolder(null,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder entity as a undefined",function(done){
        var unitOfWork = require("../../unitofwork");

        unitOfWork.FolderRepository.CreateFolder(undefined,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder entity as a empty object",function(done){
        var unitOfWork = require("../../unitofwork");

        unitOfWork.FolderRepository.CreateFolder({},function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });

    it("Should give error when adding folder.star prop is different than bool(string)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            folderName:"Docker",
            star:"truee"
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder.star prop is different than bool(number)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            folderName:"Docker",
            star:1
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder.star prop is different than bool(object)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            folderName:"Docker",
            star:{}
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder.star prop is different than bool(undefined)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            folderName:"Docker",
            star:undefined
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when adding folder.star prop is different than bool(null)",function(done){
        var unitOfWork = require("../../unitofwork");
        var newFolder = {
            folderName:"Docker",
            star:null
        };
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });

    it("Should give error when folder entity getting with id parameter is null",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.FolderRepository.GetFolderWithId(null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when folder entity getting with id parameter is undefined ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.FolderRepository.GetFolderWithId(undefined,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when folder entity getting with id parameter is number ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.FolderRepository.GetFolderWithId(1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when folder entity getting with id parameter is bool ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.FolderRepository.GetFolderWithId(true,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });

    it("Should give error when try update folder entity with null ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "Rnh6kDHNuaR0a0hS"
        };
        unitOfWork.FolderRepository.UpdateFolder(query,null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });
    it("Should give error when try update folder entity with string ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "Rnh6kDHNuaR0a0hS"
        };
        unitOfWork.FolderRepository.UpdateFolder(query,"undefined",function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });
    it("Should give error when try update folder entity with number ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "Rnh6kDHNuaR0a0hS"
        };
        unitOfWork.FolderRepository.UpdateFolder(query,1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });
    it("Should give error when try update folder entity with bool ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "Rnh6kDHNuaR0a0hS"
        };
        unitOfWork.FolderRepository.UpdateFolder(query,false,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });
    it("Should give error when try update folder entity with undefined ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "Rnh6kDHNuaR0a0hS"
        };
        unitOfWork.FolderRepository.UpdateFolder(query,undefined,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });
    it("Should give error when try update folder entity with different prop not included in shortcut entity ",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "Rnh6kDHNuaR0a0hS"
        };
        var diffProp = {
            aldirmaGonul: "Edip Akbayram"
        }
        unitOfWork.FolderRepository.UpdateFolder(query,diffProp,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
        
    });


    it("Should give error when folder entity deleting with id parameter is null",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.FolderRepository.DeleteFolderWithId(null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when folder entity deleting id with parameter is undefined ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.StatRepository.DeleteStatWithId(undefined,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when folder deleting with id parameter is number ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.FolderRepository.DeleteFolderWithId(1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when deleting folder entity id with parameter is bool ",function(done){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.FolderRepository.DeleteFolderWithId(true,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
            done();
        });
    });


});

describe("Local Database crud operations on shortcutsinfolders exceptional cases",function(){


    it("Should  give error when try to add shortcutsinfolders entity with missing folder_id",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newShortcutsinfolders = {
            
            shortcut_id:"90x5w08W3PGk2ctm"
        }
        unitOfWork.ShortcutsInFolders.AddShortcutToFolder(newShortcutsinfolders,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should  give error when try to add shortcutsinfolders entity with null folder_id",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newShortcutsinfolders = {
            folder_id:null,
            shortcut_id:"90x5w08W3PGk2ctm"
        }
        unitOfWork.ShortcutsInFolders.AddShortcutToFolder(newShortcutsinfolders,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should  give error when try to add shortcutsinfolders entity with undefined folder_id",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newShortcutsinfolders = {
            folder_id:undefined,
            shortcut_id:"90x5w08W3PGk2ctm"
        }
        unitOfWork.ShortcutsInFolders.AddShortcutToFolder(newShortcutsinfolders,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should  give error when try to add shortcutsinfolders entity with number folder_id",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newShortcutsinfolders = {
            folder_id: -1,
            shortcut_id:"90x5w08W3PGk2ctm"
        }
        unitOfWork.ShortcutsInFolders.AddShortcutToFolder(newShortcutsinfolders,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should  give error when try to add shortcutsinfolders entity with bool folder_id",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newShortcutsinfolders = {
            folder_id: true,
            shortcut_id:"90x5w08W3PGk2ctm"
        }
        unitOfWork.ShortcutsInFolders.AddShortcutToFolder(newShortcutsinfolders,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });


    it("Should  give error when try to add shortcutsinfolders entity with missing shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newShortcutsinfolders = {
            folder_id: "Rnh6kDHNuaR0a0hS"
        }
        unitOfWork.ShortcutsInFolders.AddShortcutToFolder(newShortcutsinfolders,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should  give error when try to add shortcutsinfolders entity with null shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newShortcutsinfolders = {
            folder_id:"Rnh6kDHNuaR0a0hS",
            shortcut_id:null
        }
        unitOfWork.ShortcutsInFolders.AddShortcutToFolder(newShortcutsinfolders,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should  give error when try to add shortcutsinfolders entity with undefined shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newShortcutsinfolders = {
            folder_id:"Rnh6kDHNuaR0a0hS",
            shortcut_id:undefined
        }
        unitOfWork.ShortcutsInFolders.AddShortcutToFolder(newShortcutsinfolders,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should  give error when try to add shortcutsinfolders entity with number shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newShortcutsinfolders = {
            folder_id:"Rnh6kDHNuaR0a0hS",
            shortcut_id:-1
        }
        unitOfWork.ShortcutsInFolders.AddShortcutToFolder(newShortcutsinfolders,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should  give error when try to add shortcutsinfolders entity with bool shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newShortcutsinfolders = {
            folder_id:"Rnh6kDHNuaR0a0hS",
            shortcut_id:true
        }
        unitOfWork.ShortcutsInFolders.AddShortcutToFolder(newShortcutsinfolders,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });



    it("Should give error when trying to delete shortcutsinfolders entity with undefined folder_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutsInFolders.FolderDeleted(undefined,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when trying to delete shortcutsinfolders entity with null folder_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutsInFolders.FolderDeleted(undefined,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when trying to delete shortcutsinfolders entity with bool folder_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutsInFolders.FolderDeleted(true,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when trying to delete shortcutsinfolders entity with number folder_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutsInFolders.FolderDeleted(-1,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when trying to delete shortcutsinfolders entity with object folder_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutsInFolders.FolderDeleted({},function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });


    it("Should give error when trying to delete shortcutsinfolders entity with undefined shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutsInFolders.ShortcutDeleted(undefined,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when trying to delete shortcutsinfolders entity with null shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutsInFolders.ShortcutDeleted(undefined,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when trying to delete shortcutsinfolders entity with bool shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutsInFolders.ShortcutDeleted(true,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when trying to delete shortcutsinfolders entity with number shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutsInFolders.ShortcutDeleted(-1,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
    it("Should give error when trying to delete shortcutsinfolders entity with object shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.ShortcutsInFolders.ShortcutDeleted({},function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
            done();
        });
    });
 

});

describe("Local Database crud operations on RELATIONS exceptional cases",function(){
    it("Should give error when trying to delete relational shortcut entity with undefined shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.RelationsRepository.ShortcutRelationalDelete(undefined,function(newValue){
            expect(newValue).to.be.false;
            done();
        });
    });
    it("Should give error when trying to delete relational shortcut entity with null shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.RelationsRepository.ShortcutRelationalDelete(null,function(newValue){
            expect(newValue).to.be.false;
            done();
        });
    });
    it("Should give error when trying to delete relational shortcut entity with bool shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.RelationsRepository.ShortcutRelationalDelete(true,function(newValue){
            expect(newValue).to.be.false;
            done();
        });
    });
    it("Should give error when trying to delete relational shortcut entity with number shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.RelationsRepository.ShortcutRelationalDelete(-1,function(newValue){
            expect(newValue).to.be.false;
            done();
        });
    });
    it("Should give error when trying to delete relational shortcut entity with object shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.RelationsRepository.ShortcutRelationalDelete({},function(newValue){
            expect(newValue).to.be.false;
            done();
        });
    });

    it("Should give error when trying to get relational shortcut entity and related stats with undefined shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.RelationsRepository.GetShortcutWithRelationalStats(undefined,function(newValue){
            expect(newValue).to.be.null;
            done();
        });
    });
    it("Should give error when trying to get relational shortcut entity and related stats with null shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.RelationsRepository.GetShortcutWithRelationalStats(null,function(newValue){
            expect(newValue).to.be.null;
            done();
        });
    });
    it("Should give error when trying to get relational shortcut entity and related stats with bool shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.RelationsRepository.GetShortcutWithRelationalStats(true,function(newValue){
            expect(newValue).to.be.null;
            done();
        });
    });
    it("Should give error when trying to get relational shortcut entity and related stats with number shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.RelationsRepository.GetShortcutWithRelationalStats(-1,function(newValue){
            expect(newValue).to.be.null;
            done();
        });
    });
    it("Should give error when trying to get relational shortcut entity and related stats with object shortcut_id",function(done){
        var unitOfWork = require("../../unitofwork");
        unitOfWork.RelationsRepository.GetShortcutWithRelationalStats({},function(newValue){
            expect(newValue).to.be.null;
            done();
        });
    });
});