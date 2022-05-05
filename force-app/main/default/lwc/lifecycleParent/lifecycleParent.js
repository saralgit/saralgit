import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {
    name
    isChildVisible = false
    constructor(){
        super()
        console.log("Parent Constructor Called")
    }
    connectedCallback(){
        console.log("parent connected callback method called")
    }
    renderedCallback(){
        console.log("parent rendered callback method called")
    }
    changeHandler(event){
        this.name = event.target.value
    }
    handleClick(){
        this.isChildVisible = !this.isChildVisible
    }
    errorCallback(error,stack){
        console.log(error.message)
        console.log(stack)
    }
}