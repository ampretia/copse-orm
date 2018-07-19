
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


