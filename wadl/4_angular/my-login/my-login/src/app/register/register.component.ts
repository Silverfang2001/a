import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  saveData(name:string,email:string,password:string){
   
    var user = {
      name: name,
      email:email,
    };
  
    var u = JSON.parse(localStorage.getItem('users')|| '[]')
    u.push(user);
    localStorage.setItem("users", JSON.stringify(u));
  }
}
