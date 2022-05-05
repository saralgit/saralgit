import { LightningElement } from 'lwc';
import moment from '@salesforce/resourceUrl/moment'
import animate from '@salesforce/resourceUrl/animate'
import {loadScript} from 'lightning/platformResourceLoader'
import {loadStyle} from 'lightning/platformResourceLoader'
export default class ThirdPartyFiles extends LightningElement {
    currentDate = ''
    renderedCallback(){
        Promise.all([
            loadStyle(this,animate+'/animate/animate.min.css'),
            loadScript(this,moment+'/moment/moment.min.js')
        ]).then(() => {
            this.setDateOnScreen()
        }).catch(error=>{
            console.log(error)
        })
    }
    setDateOnScreen(){
        console.log('here')
        console.log('Currebt Date' + this.currentDate)
        this.currentDate = moment().format('LLLL');
        console.log('Currebt Date' + this.currentDate)
    }
}