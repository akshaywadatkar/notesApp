import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { AddNoteComponent } from './component/add-note/add-note.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,ReactiveFormsModule,CommonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'notesApp';

  constructor(
    private dialog : MatDialog
  ) { }


  ngOnInit() {
    const array = this.notesForms.get('notes')?.value
    // const data = new FormGroup({
    //   id: new FormControl(1),
    //   title: new FormControl('FIrst Task'),
    //   details: new FormControl(''),
    //   isCompleted: new FormControl(false),
    //   lastUpdateAt: new FormControl(new Date()),
    // })
    // array?.push(data)

    console.log(array);
    

  }

  notesForms = new FormGroup({
    notes: new FormArray([
      new FormGroup({
      id: new FormControl(1),
      title: new FormControl('FIrst Task'),
      details: new FormControl(''),
      isCompleted: new FormControl(true),
      lastUpdateAt: new FormControl(new Date()),
    })
    ])
  })


  createNote() {
    return new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null),
      details: new FormControl(null),
      isCompleted: new FormControl(null),
      lastUpdateAt: new FormControl(null),
    })
  }


   getNotesFormArray (){
    return this.notesForms.get('notes')?.value
  }


deleteIndex(i:any){
  // this.notesForms.get('notes')?
}


openDialog(){

  let dialogRef = this.dialog.open(AddNoteComponent, {
  height: '400px',
  width: '600px',
});





}


editTask(note:any){

}
}
