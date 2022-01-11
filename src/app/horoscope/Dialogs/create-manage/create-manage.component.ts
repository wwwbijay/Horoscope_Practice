import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-manage',
  templateUrl: './create-manage.component.html',
  styleUrls: ['./create-manage.component.css']
})
export class CreateManageComponent implements OnInit {
  createForm = new FormGroup({
    'choose': new FormControl('', [Validators.required]),
    'date': new FormControl ('', [Validators.required]),
    'eng': new FormControl ('', [Validators.required]),
    'nep': new FormControl ('', [Validators.required])
  });

  constructor() { } 

  ngOnInit(): void {
  }

  clicksub(){
    console.log(this.createForm.value)
    this.createForm.reset();
  }                          
}
