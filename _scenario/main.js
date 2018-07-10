


const {CommercialPaper,Account} = require('./src').org_example_commercialpaper_assets;
const {Company} = require('./src').org_example_commercialpaper_pts;

let myNewPaper = new CommercialPaper('id12345');
let newOwner = new Company('JoeSmith')
let usAccount = new Account('US1');

usAccount.setSummary('US account');
usAccount.setCashbalance('1200000')
myNewPaper.setIssuer(newOwner);
myNewPaper.owner=newOwner
myNewPaper.setCusip('12323445')
myNewPaper.setTicker('compid')
myNewPaper.setCurrency('USD')
myNewPaper.setPar(10000)
myNewPaper.setMaturity(120);
myNewPaper.owningAccount= usAccount;
myNewPaper.setIssuedate(new Date());

// myNewPaper.store('worldstate');


console.log(JSON.stringify(myNewPaper.toJSON()));
