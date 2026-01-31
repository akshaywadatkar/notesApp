import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent {




  notesForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(null),
    details: new FormControl(null),
    isCompleted: new FormControl(false),
    lastUpdateAt: new FormControl(new Date()),
  })



  addnote(){
    

  }
}
