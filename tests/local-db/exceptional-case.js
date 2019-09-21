process.env.NODE_ENV = 'test';

//var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

describe("Local Database crud operations on shortcuts exceptional cases",function(){
    it("Should give error when adding shortcut.command prop is missing",function(){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
    });
    it("Should give error when adding shortcut.description prop is missing",function(){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
    });
    it("Should give error when adding shortcut.star prop is missing",function(){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google"
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
    });
    it("Should give error when adding shortcut.command different data type except string",function(){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: 1,
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: true,
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: null,
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: undefined,
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: {},
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        unitOfWork.ShortcutRepository.CreateShortcut(null,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        unitOfWork.ShortcutRepository.CreateShortcut(undefined,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
    });
    it("Should give error when adding shortcut.description different data type except string",function(){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: 1,
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: "ping google.com",
            description: -1,
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: "ping google.com",
            description: null,
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: "ping google.com",
            description: undefined,
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: "ping google.com",
            description: true,
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: "ping google.com",
            description: {},
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        unitOfWork.ShortcutRepository.CreateShortcut(null,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        unitOfWork.ShortcutRepository.CreateShortcut(undefined,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
    });
    it("Should give error when adding shortcut.star different data type except bool",function(){
        var unitOfWork = require("../../unitofwork");
        var newShortcut = {
            command: "ping google.com",
            description: 1,
            star:"true"
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google",
            star:1
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google",
            star:null
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google",
            star:undefined
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google",
            star:{}
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        newShortcut = {
            command: "ping google.com",
            description: "simple ping command for google",
            star:-1
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        unitOfWork.ShortcutRepository.CreateShortcut(null,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
        unitOfWork.ShortcutRepository.CreateShortcut(undefined,function(newValue){
            expect(newValue).to.be.null;
            expect(newValue).not.to.be.undefined;
        });
    });

    it("Should give error when getting id parameter is null",function(){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.GetShortcutWithId(null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
        });
    });
    it("Should give error when getting id parameter is undefined ",function(){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.GetShortcutWithId(undefined,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
        });
    });
    it("Should give error when getting id parameter is number ",function(){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.GetShortcutWithId(1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
        });
    });
    it("Should give error when getting id parameter is bool ",function(){
        var unitOfWork = require("../../unitofwork");
        
        unitOfWork.ShortcutRepository.GetShortcutWithId(true,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
        });
    });
    it("Should give error when try update with null ",function(){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,null,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
        });
        
    });
    it("Should give error when try update with string ",function(){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,"undefined",function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
        });
        
    });
    it("Should give error when try update with number ",function(){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,1,function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
        });
        
    });
    it("Should give error when try update with bool ",function(){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,"undefined",function(result){
            expect(result).to.be.null;
            expect(result).not.to.be.undefined;
        });
        
    });
    it("Should give error when try update with different prop not included in shortcut entity ",function(){
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
        });
        
    });

});
describe("Local Database crud operations on stats exceptional cases",function(){
    

});
describe("Local Database crud operations on folders exceptional cases",function(){
    

});
describe("Local Database crud operations on RELATIONS exceptional cases",function(){
    
});