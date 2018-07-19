

// File :org.example.commercialpaper.Company:
const Resource = require('composer-common').Resource;
const Model = require('./_model');
const ns = 'org.example.commercialpaper';
const type = 'Company';
const qualifiedName = Model.getFullyQualifiedName(ns, type);

class Company extends Resource  {
    constructor(id){
        let model = Model.getModel();
        const classDecl = model.modelManager.getType(qualifiedName);
        super(model.modelManager, classDecl, ns, type, id); 
    }


 toJSON(){
        return this.getModelManager().getSerializer().toJSON(this,{validate:true,convertResourcesToRelationships:true,permitResourcesForRelationships:true});
    }


    /**
    * Their identifier or stock trading symbol
    */
    setSymbol( value ){
        this.symbol = value;
    }
    
    getSymbol(){
        return this.symbol;
    }

    /**
    * Public name
    */
    setName( value ){
        this.name = value;
    }
    
    getName(){
        return this.name;
    }

    /**
    * An instance of org.example.commercialpaper.DID
    */
    setPublicdid( value ){
        this.publicdid = value;
    }
    
    getPublicdid(){
        return this.publicdid;
    }

    /**
    * 
    */
    setPapertradingaccounts( value ){
        this.paperTradingAccounts = value;
    }
    
    getPapertradingaccounts(){
        return this.paperTradingAccounts;
    }

    /**
    * The identifier of an instance of org.example.commercialpaper.Account
    */
    setIssuedpaperaccount( value ){
        this.issuedPaperAccount = value;
    }
    
    getIssuedpaperaccount(){
        return this.issuedPaperAccount;
    }

}
module.exports=Company


// File :org.example.commercialpaper.Trader:
const Resource = require('composer-common').Resource;
const Model = require('./_model');
const ns = 'org.example.commercialpaper';
const type = 'Trader';
const qualifiedName = Model.getFullyQualifiedName(ns, type);

class Trader extends Resource  {
    constructor(id){
        let model = Model.getModel();
        const classDecl = model.modelManager.getType(qualifiedName);
        super(model.modelManager, classDecl, ns, type, id); 
    }


 toJSON(){
        return this.getModelManager().getSerializer().toJSON(this,{validate:true,convertResourcesToRelationships:true,permitResourcesForRelationships:true});
    }


    /**
    * The instance identifier for this type
    */
    setParticipantid( value ){
        this.participantId = value;
    }
    
    getParticipantid(){
        return this.participantId;
    }

    /**
    * 
    */
    setFirstname( value ){
        this.firstName = value;
    }
    
    getFirstname(){
        return this.firstName;
    }

    /**
    * 
    */
    setLastname( value ){
        this.lastName = value;
    }
    
    getLastname(){
        return this.lastName;
    }

    /**
    * The identifier of an instance of org.example.commercialpaper.Company
    */
    setWorksfor( value ){
        this.worksFor = value;
    }
    
    getWorksfor(){
        return this.worksFor;
    }

    /**
    * 
    */
    setManages( value ){
        this.manages = value;
    }
    
    getManages(){
        return this.manages;
    }

    /**
    * An instance of org.example.commercialpaper.DID
    */
    setTraderdid( value ){
        this.traderdid = value;
    }
    
    getTraderdid(){
        return this.traderdid;
    }

}
module.exports=Trader






