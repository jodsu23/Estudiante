import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

/*@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('myModal') model : ElementRef | undefined;
  studentObj: Student = new Student();

  title = 'AngularEstudiante';

  openModel(){

    const model = document.getElementById("myModal");

    if(model != null){
      model.style.display = 'block';
    }

  }

  closeModel(){

    if(this.model != null){
      this.model.nativeElement.style.display = 'none';
    }

  }

  saveStudent(){
    debugger;
    
    const isLocalPresent = localStorage.getItem("angular17crud");

    if(isLocalPresent != null){

      const oldArray = JSON.parse(isLocalPresent);
      oldArray.push(this.studentObj);
      localStorage.setItem('angular17crud', JSON.stringify(oldArray));

    }else{

      const newArr = [];
      newArr.push(this.studentObj);
      localStorage.setItem('angular17crud', JSON.stringify(newArr));

    }

  }

}


//  Creatin Classes
export class Student{
  name: string;
  mobileNo: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  address: string;

  constructor(){
    this.address = '';
    this.city = '';
    this.email = '';
    this.mobileNo = '';
    this.name = '';
    this.state = '';
    this.pincode = '';
  }
}