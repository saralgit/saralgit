import { LightningElement } from 'lwc';
import ID from '@salesforce/user/Id'
import GUEST from '@salesforce/user/isGuest'
export default class UserProperty extends LightningElement {
    ID = ID
    isGuest = GUEST
}