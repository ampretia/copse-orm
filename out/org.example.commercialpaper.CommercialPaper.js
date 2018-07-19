
const Resource = require('composer-common').Resource;
const Model = require('./_model');
const ns = 'org.example.commercialpaper';
const type = 'CommercialPaper';
const qualifiedName = Model.getFullyQualifiedName(ns, type);

class CommercialPaper extends Resource  {
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
    setCusip( value ){
        this.CUSIP = value;
    }
    
    getCusip(){
        return this.CUSIP;
    }

    /**
    * String based name for readability
    */
    setTicker( value ){
        this.ticker = value;
    }
    
    getTicker(){
        return this.ticker;
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
    * The market value of the commercial paper
    */
    setPar( value ){
        this.par = value;
    }
    
    getPar(){
        return this.par;
    }

    /**
    * Number of days to maturity (minimum = 1 day --> 270 days depending on market)
    */
    setMaturity( value ){
        this.maturity = value;
    }
    
    getMaturity(){
        return this.maturity;
    }

    /**
    * Company which issued the commercial paper
    */
    setIssuer( value ){
        this.issuer = value;
    }
    
    getIssuer(){
        return this.issuer;
    }

    /**
    * The identifier of an instance of org.example.commercialpaper.Company
    */
    setOwner( value ){
        this.owner = value;
    }
    
    getOwner(){
        return this.owner;
    }

    /**
    * The identifier of an instance of org.example.commercialpaper.Account
    */
    setOwningaccount( value ){
        this.owningAccount = value;
    }
    
    getOwningaccount(){
        return this.owningAccount;
    }

    /**
    * timestamp at the point of issue
    */
    setIssuedate( value ){
        this.issueDate = value;
    }
    
    getIssuedate(){
        return this.issueDate;
    }

}
module.exports=CommercialPaper


