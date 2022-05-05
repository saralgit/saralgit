import { api, LightningElement } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title
    callAura(){
        const msg = new CustomEvent('sendmsg',{
            detail : {
                msg:"Messgae from lwc to aura"
            }
        })
        this.dispatchEvent(msg)
    }
}
