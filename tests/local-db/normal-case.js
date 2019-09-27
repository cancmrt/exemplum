process.env.NODE_ENV = 'test';

//var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
describe('Local Database General Connectivity', function () {
    it('Should give shortcuts and stats like not null or not undefined', function (done) {
        var context = require("../../local-db/context");
        expect(context.shortcuts).not.to.be.null;
        expect(context.shortcuts).not.to.be.undefined;
        expect(context.stats).not.to.be.null;
        expect(context.stats).not.to.be.undefined;
        done();
    });

    it('Should give entity shortcut', function (done) {
        var entity = require("../../local-db/entity/shortcut");
        expect(entity).not.to.be.null;
        expect(entity).not.to.be.undefined;
        done();
    });
    it('Should give entity stats', function (done) {
        var entity = require("../../local-db/entity/stat");
        expect(entity).not.to.be.null;
        expect(entity).not.to.be.undefined;
        done();
    });
});
describe("Local Database crud operations on shortcuts",function(){
    it("Should add without error shortcut entity to db",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newShortcut = {
            _id:"90x5w08W3PGk2ctm",
            command: "ping google.com",
            description: "simple ping command for google",
            star:true
        }
        unitOfWork.ShortcutRepository.CreateShortcut(newShortcut,function(newValue){
            expect(newValue).not.to.be.null;
            expect(newValue).not.to.be.undefined;
            expect(newValue).haveOwnProperty("_id");
            expect(newValue._id).not.to.be.null;
            expect(newValue._id).not.to.be.undefined;
            expect(newValue._id).to.be.string;
            done();
        });
    });
    it("Should get shoutcut entity with _id",function(done){
        var unitOfWork = require("../../unitofwork");
        var id = "90x5w08W3PGk2ctm"
        unitOfWork.ShortcutRepository.GetShortcutWithId(id,function(result){
            expect(result).not.to.be.null;
            expect(result).not.to.be.undefined;
            expect(result).haveOwnProperty("_id");
            expect(result._id).not.to.be.null;
            expect(result._id).not.to.be.undefined;
            expect(result._id).to.be.string;
            done();
        });

    });
    it("Should update shortcut property star",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: '90x5w08W3PGk2ctm'
        };
        var update = {
            star: false
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,update,function(result){
            expect(result).not.to.be.null;
            expect(result).not.to.be.undefined;
            expect(result).to.be.an('number');
            expect(result).to.be.greaterThan(0);
            done();
        });
    });
    it("Should update shortcut property description",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        var update = {
            description: "Description updated"
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,update,function(result){
            expect(result).not.to.be.null;
            expect(result).not.to.be.undefined;
            expect(result).to.be.an('number');
            expect(result).to.be.greaterThan(0);
            done();
        });

    });
    it("Should update shortcut property command",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        var update = {
            command: "cd AllFolder && ls"
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,update,function(result){
            expect(result).not.to.be.null;
            expect(result).not.to.be.undefined;
            expect(result).to.be.an('number');
            expect(result).to.be.greaterThan(0);
            done();
        });

    });
    it("Should update shortcut entity all fields",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: "90x5w08W3PGk2ctm"
        };
        var update = {
            description:"simple ping command for google",
            command: "ping google.com",
            star:true
        };
        unitOfWork.ShortcutRepository.UpdateShortcut(query,update,function(result){
            expect(result).not.to.be.null;
            expect(result).not.to.be.undefined;
            expect(result).to.be.an('number');
            expect(result).to.be.greaterThan(0);
            done();
        });

    });
    it("Should delete shourtcut entity in db with _id",function(done){
        var unitOfWork = require("../../unitofwork");
        var id = "90x5w08W3PGk2ctm"
        unitOfWork.ShortcutRepository.DeleteShortcutWithId(id,function(result){
            expect(result).not.to.be.null;
            expect(result).not.to.be.undefined;
            expect(result).to.be.an('number');
            expect(result).to.be.greaterThan(0);
            done();
        });
    });

});
describe("Local Database crud operations on stats",function(){
    it("Should add without error stat entity to db",function(done){
        var unitOfWork = require("../../unitofwork");
        var stat = {
            _id: "WmFgxF1NKxnkzO8q",
            copied:true,
            openedincmd:false
        }
        unitOfWork.StatRepository.CreateStat(stat,function(newValue){
            expect(newValue).not.to.be.null;
            expect(newValue).not.to.be.undefined;
            expect(newValue).haveOwnProperty("_id");
            expect(newValue._id).not.to.be.null;
            expect(newValue._id).not.to.be.undefined;
            expect(newValue._id).to.be.string;
            done();
        });
    });
    it("Should get stat entity with _id",function(done){
        var unitOfWork = require("../../unitofwork");
        var id = "WmFgxF1NKxnkzO8q"
        unitOfWork.StatRepository.GetStatWithId(id,function(result){
            expect(result).not.to.be.null;
            expect(result).not.to.be.undefined;
            expect(result).haveOwnProperty("_id");
            expect(result._id).not.to.be.null;
            expect(result._id).not.to.be.undefined;
            expect(result._id).to.be.string;
            done();
        });
    });
    it("Should delete stat entity in db",function(done){
        var unitOfWork = require("../../unitofwork");
        var id = "WmFgxF1NKxnkzO8q"
        unitOfWork.StatRepository.DeleteStatWithId(id,function(result){
            expect(result).not.to.be.null;
            expect(result).not.to.be.undefined;
            expect(result).to.be.an('number');
            expect(result).to.be.greaterThan(0);
            done();
        });
    });

});
describe("Local Database crud operations on folders",function(){
    it("Should add without error folder entity to db",function(done){
        var unitOfWork = require("../../unitofwork");
        //{"description":"simple ping command for google","command":"ping google.com","star":true,"_id":"90x5w08W3PGk2ctm"}
        var newFolder = {
            _id:"Rnh6kDHNuaR0a0hS",
            folderName: "Docker",
            star:true
        }
        unitOfWork.FolderRepository.CreateFolder(newFolder,function(newValue){
            expect(newValue).not.to.be.null;
            expect(newValue).not.to.be.undefined;
            expect(newValue).haveOwnProperty("_id");
            expect(newValue._id).not.to.be.null;
            expect(newValue._id).not.to.be.undefined;
            expect(newValue._id).to.be.string;
            done();
        });
    });
    it("Should get folder entity with _id",function(done){
        var unitOfWork = require("../../unitofwork");
        var id = "Rnh6kDHNuaR0a0hS"
        unitOfWork.FolderRepository.GetFolderWithId(id,function(result){
            expect(result).not.to.be.null;
            expect(result).not.to.be.undefined;
            expect(result).haveOwnProperty("_id");
            expect(result._id).not.to.be.null;
            expect(result._id).not.to.be.undefined;
            expect(result._id).to.be.string;
            done();
        });
    });
    it("Should update folder property star",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: 'Rnh6kDHNuaR0a0hS'
        };
        var update = {
            star: false
        };
        unitOfWork.FolderRepository.UpdateFolder(query,update,function(result){
            expect(result).not.to.be.null;
            expect(result).not.to.be.undefined;
            expect(result).to.be.an('number');
            expect(result).to.be.greaterThan(0);
            done();
        });
    });
    it("Should update folder property folderName",function(done){
        var unitOfWork = require("../../unitofwork");
        var query = {
            _id: 'Rnh6kDHNuaR0a0hS'
        };
        var update = {
            folderName: "DOCKERS"
        };
        unitOfWork.FolderRepository.UpdateFolder(query,update,function(result){
            expect(result).not.to.be.null;
            expect(result).not.to.be.undefined;
            expect(result).to.be.an('number');
            expect(result).to.be.greaterThan(0);
            done();
        });
    });
    it("Should delete folder entity in db",function(done){
        var unitOfWork = require("../../unitofwork");
            var id = "Rnh6kDHNuaR0a0hS"
            unitOfWork.FolderRepository.DeleteFolderWithId(id,function(result){
                expect(result).not.to.be.null;
                expect(result).not.to.be.undefined;
                expect(result).to.be.an('number');
                expect(result).to.be.greaterThan(0);
                done();
        });
    });

});
describe("Local Database crud operations on RELATIONS",function(){
    it("Should if shortcut entity delete; also delete in folders and stats",function(){

    });
    it("Should get shortcut entity with relational stat entity array",function(){

    });
    it("Should get all folders entity with relational shortcut entity array",function(){

    });
    it("Should if folder entity delete; also delete shortcut relation which added to folder",function(){

    });
});