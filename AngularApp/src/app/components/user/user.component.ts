import { Component } from '@angular/core';
@Component({
    selector : 'app-user',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css']
})
export class UserComponent{

user : User

constructor(){
    
    this.user.firstName ="Kishon"
    this.user.lastName = "Kumar"
    this.user.age = 11
    this.user.address.street = "My street"
    this.user.address.State = "My state"

}

}
interface User {
        firstName : String 
        lastName : String
        age : Number
        address : {
            street : String,
            city : String,
            State : String
        }
}
