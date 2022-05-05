import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {
    renderedCallback(){
        const style = document.createElement('style')
        style.innerText = ``
    }
}