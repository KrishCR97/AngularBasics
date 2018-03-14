import { Component } from '@angular/core';
@Component({
    selector : 'app-user',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css']
})
export class UserComponent{
//properties
firstName : String
lastName : String
age : Number
address
//
constructor(){
    this.firstName = "Kishon"
    this.lastName = "Kumar"
    this.age = 24
    this.address = {
        street : 'Any Street',
        city : 'Any city',
        State : 'Any state'
    }
}
showAge(){
    return this.age
}
}
