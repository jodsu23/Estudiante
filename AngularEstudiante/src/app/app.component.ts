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
//    this.studentObj = new Student();
    
    const model = document.getElementById("myModal");

    if(model != null){
      model.style.display = 'block';
    }

  }

  closeModel(){
this.studentObj = new Student();
    if(this.model != null){
      this.model.nativeElement.style.display = 'none';
    }

  }

  onDelete(item: Student){
    const isDelete = confirm("Are you sure want to Delete");

    if(isDelete){
      const currentRecord = this.studentList.findIndex(m => m.id === this.studentObj.id);

      this.studentList.splice(currentRecord, 1);
      localStorage.setItem('angular17crud', JSON.stringify(this.studentList));

    }

  }

  onEdit(item: Student){
    this.studentObj = item;
    this.openModel();
  }

  updateStudent(){
    const currentRecord = this.studentList.find(m => m.id === this.studentObj.id);

    if(currentRecord != undefined){
      currentRecord.name      = this.studentObj.name;
      currentRecord.address   = this.studentObj.address;
      currentRecord.mobileNo  = this.studentObj.mobileNo;
    };

    localStorage.setItem('angular17crud', JSON.stringify(this.studentList));

    this.closeModel();
  }

  saveStudent(){
    //debugger;
    
    const isLocalPresent = localStorage.getItem("angular17crud");

    if(isLocalPresent != null){

      const oldArray = JSON.parse(isLocalPresent);

      //  Aqui cuando hacemos el edit
      this.studentObj.id = oldArray.length + 1;
      // End Edit

      oldArray.push(this.studentObj);
      // enviamos data al arraycard principal, actualizado.
      this.studentList = oldArray;
      localStorage.setItem('angular17crud', JSON.stringify(oldArray));

    }else{

      const newArr = [];
      newArr.push(this.studentObj);

      //  Aqui cuando hacemos el edit
      this.studentObj.id = 1;
      // End Edit

      this.studentList = newArr;
      localStorage.setItem('angular17crud', JSON.stringify(newArr));

    }

    this.closeModel();

  }

}


//  Creatin Classes
export class Student{
  id: number;
  name: string;
  mobileNo: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  address: string;

  constructor(){
    this.id = 0;
    this.address = '';
    this.city = '';
    this.email = '';
    this.mobileNo = '';
    this.name = '';
    this.state = '';
    this.pincode = '';
  }
}