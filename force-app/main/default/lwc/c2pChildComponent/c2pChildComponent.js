import { LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {
    value1 = 100
    handleClick(){
        const myEvent = new CustomEvent('close',{bubbles:true,detail:100})
        this.dispatchEvent(myEvent)
    }
    footerHandler(){
        console.log("Footer Handler Called")
    }
}