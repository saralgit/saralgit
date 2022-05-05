import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    users = ["saral","hero","great"]
    buttonClickHandler(){
        console.log('Hello')
        const elem1 = this.template.querySelector('h1')
        console.log(elem1.innerText)

        const userElements = this.template.querySelectorAll(".name")
        Array.from(userElements).forEach(item =>{
            console.log(item.innerText)
        })
        const element = this.template.querySelector(".child")
        element.innerHTML = "<p>this is embedded</p>"
    }
}