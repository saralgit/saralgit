import { LightningElement } from 'lwc';
import signIn from './signIn.html'
import signUp from './signUp.html'
import renderMethod from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    selectedButton
    render(){
        if(this.selectedButton == 'signup')
            return signUp;
        if(this.selectedButton == 'signin')
            return signIn
        if(this.selectedButton == 'back')
            return renderMethod    
        return renderMethod;    
    }
    handleClick(event){
        this.selectedButton = event.target.value
    }
}