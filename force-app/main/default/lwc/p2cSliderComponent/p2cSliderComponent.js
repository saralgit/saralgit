import { LightningElement,api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    value = 20
    @api changeValue(){
        console.log("Inside slider component")
        this.value = 50;
    }
}