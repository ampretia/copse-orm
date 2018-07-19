
const fs = require('fs');
const levelOneModel = fs.readFileSync('model.cto','utf8')

const ModelManager = require('composer-common').ModelManager;
let model;

class _model {

  static getModel(){
    if (!model){
      model = new _model();
    }

    return model;
  }
    /**
     * Get the fully qualified name of a type.
     * @param {string} namespace - namespace of the type.
     * @param {string} type - short name of the type.
     * @returns {string} the fully qualified type name.
     */
    static getFullyQualifiedName(namespace, type) {
      if (namespace) {
          return `${namespace}.${type}`;
      } else {
          return type;
      }
  }
  
  constructor(){
    this.modelManager = new ModelManager();   
    this.modelManager.addModelFile(levelOneModel);
  }

}


module.exports=_model;