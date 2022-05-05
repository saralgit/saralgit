import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class Notifications extends LightningElement {
    toastHandler(){
        const event = new ShowToastEvent({
             title: 'Success',
             message : 'Hello Guys',
             variant : 'success'
        })
        this.dispatchEvent(event)
    }
}