import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
export class AppComponent implements OnInit {
  @ViewChild('myModal') model : ElementRef | undefined;
  studentObj: Student = new Student();
  studentList: Student[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem("angular17crud");

    if(localData != null){
      this.studentList = JSON.parse(localData);
    }

  }

  title = 'AngularEstudiante';

  openModel(){
    // Esta linea setea nuevamente el modelo cuando se apertura el model, asi no quedan datos cacheados anteriormente.
    this.studentObj = new Student();
    
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
      // enviamos data al arraycard principal, actualizado.
      this.studentList = oldArray;
      localStorage.setItem('angular17crud', JSON.stringify(oldArray));

    }else{

      const newArr = [];
      newArr.push(this.studentObj);
      this.studentList = newArr;
      localStorage.setItem('angular17crud', JSON.stringify(newArr));

    }

    this.closeModel();

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