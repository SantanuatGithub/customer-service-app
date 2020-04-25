import { LightningElement, track } from 'lwc';
import { getCases } from 'data/caseServices';
//import LightningElementSLDS from 'util/lightningElementSLDS';


export default class App extends LightningElement {
    @track cases = [];

   connectedCallback() {
        getCases().then(result => {
        this.cases = result;
        });
    }

    

    /*searchdata(event) {
    const searchKey = event.target.value.toLowerCase();
    this.contacts = this.allContacts.filter(
        contact => contact.lastName.toLowerCase().includes(searchKey)
    );
  }*/
}
