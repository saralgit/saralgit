import { LightningElement,wire } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
import {CurrentPageReference} from 'lightning/navigation'
export default class NavigateToHome extends NavigationMixin(LightningElement) {
    @wire(CurrentPageReference)
    pageRef

    get PageReference(){
        return this.pageRef ? JSON.stringify(this.pageRef,null,2):''
    }
    navigateToHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }
    navigateToChatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }
    navigateToObject(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }
    navigateToNewRecordWithDefault(){
        const defaultValue = encodeDefaultFieldValues({
            FirstName:'Saral',
            LastName:'Khandelwal',
            LeadSource:'Other'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultValue
            }
        })
    }
    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        })
    }
    navigateToRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0036D00000S9GSKQA3',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }
    navigateToRecordRelationshipPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'0016D00000c9ZdHQAU',
                objectApiName:'Account',
                relationshipApiName : 'Contacts',
                actionName:'view'
            }
        })
    }
    navigateToExternalPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://www.google.com'
            }
        })
    }
    navigateToLWC(){
        var definition = {
            componentDef:'c:navigationLWCTagret',
            attributes:{
                recordId:'12345'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(definition))
            }
        })
    }
    navigateToAura(){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName : 'c__AuraNavigationTarget'
            },
            state:{
                "c__id" : '123456789'
            }
        })
    }
    navigateToVF(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/navigateVFPAGE'
            }
        }).then(generatedUrl =>{
            console.log(generatedUrl)
            window.open(generatedUrl)
        })
    }
}