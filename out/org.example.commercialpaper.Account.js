
const Resource = require('composer-common').Resource;
const Model = require('./_model');
const ns = 'org.example.commercialpaper';
const type = 'Account';
const qualifiedName = Model.getFullyQualifiedName(ns, type);

class Account extends Resource  {
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
    setId( value ){
        this.ID = value;
    }
    
    getId(){
        return this.ID;
    }

    /**
    * 
    */
    setSummary( value ){
        this.summary = value;
    }
    
    getSummary(){
        return this.summary;
    }

    /**
    * An instance of org.example.commercialpaper.Currency
    */
    setWorkingcurrency( value ){
        this.workingCurrency = value;
    }
    
    getWorkingcurrency(){
        return this.workingCurrency;
    }

    /**
    * 
    */
    setCashbalance( value ){
        this.cashBalance = value;
    }
    
    getCashbalance(){
        return this.cashBalance;
    }

    /**
    * 
    */
    setAssets( value ){
        this.assets = value;
    }
    
    getAssets(){
        return this.assets;
    }

}
module.exports=Account


