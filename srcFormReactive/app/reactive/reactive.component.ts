import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  nForm: FormGroup;
  post:any;
  description:String = '';
  name:string = '';

  constructor(private fb: FormBuilder) { 

    this.nForm = fb.group(
      {
        'name' : [null, Validators.required],
        'description': [null, Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(20)])],
        'validate':''
      }

    )
    
  }

  ngOnInit() {
  }

  addPost(post){
    this.description = post.description;
    this.name = post.name;
  }

}
