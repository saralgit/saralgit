import { LightningElement,api } from 'lwc';

export default class P2cParent extends LightningElement {
    percentage = 10;
    childData = [{
        name:"saral",
        age:20
    },
    {
        name : "hello",
        age:22
    }
    ]
    changeHandler(event){
        this.percentage = event.target.value
    }
    handleClick(){
        console.log("Insid parent js")
        this.template.querySelector('c-p2c-slider-component').changeValue()
        console.log("Return Inside parent js")
    }
}