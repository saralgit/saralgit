import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    value = 20
    closeHandler(event){
        console.log("event " + JSON.stringify(event))
        let data = event.detail
        console.log(event.detail)
        this.value = data;
    }
    handleButtonClick(){
        console.log("Parent Button Handler called")
    }
}