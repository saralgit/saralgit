import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {
    constructor(){
        super();
        console.log("child Constructor Called")
    }
    connectedCallback(){
        console.log("child connected callback method called")
        throw new Error("Loading of child component failed")
    }
    renderedCallback(){
        console.log("child rendered callback method called")
    }
    disconnectedCallback(){
        alert("Child disconnected call back method is called")
    }
}