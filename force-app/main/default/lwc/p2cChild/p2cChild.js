import { LightningElement,api } from 'lwc';

export default class P2cChild extends LightningElement {
    @api message
    @api cardHeading
}