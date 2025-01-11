import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild('myModal') model : ElementRef | undefined;

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

}
