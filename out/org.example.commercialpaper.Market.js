
const Resource = require('composer-common').Resource;
const Model = require('./_model');
const ns = 'org.example.commercialpaper';
const type = 'Market';
const qualifiedName = Model.getFullyQualifiedName(ns, type);

class Market extends Resource  {
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
    setName( value ){
        this.name = value;
    }
    
    getName(){
        return this.name;
    }

    /**
    * An instance of org.example.commercialpaper.Currency
    */
    setCurrency( value ){
        this.currency = value;
    }
    
    getCurrency(){
        return this.currency;
    }

    /**
    * 
    */
    setPapersforsale( value ){
        this.papersForSale = value;
    }
    
    getPapersforsale(){
        return this.papersForSale;
    }

    /**
    * 
    */
    setMaxmaturitytime( value ){
        this.maxMaturityTime = value;
    }
    
    getMaxmaturitytime(){
        return this.maxMaturityTime;
    }

}
module.exports=Market