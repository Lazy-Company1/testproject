import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-test-details',
  templateUrl: './edit-test-details.component.html',
  styleUrls: ['./edit-test-details.component.css']
})
export class EditTestDetailsComponent implements OnInit {

  public test={
    no:'',
    nage:'',
    date:'',
    classement:'',
    nb:'',
    qualified_finales:'',
    first_finales:'',
    qualified_finales12:'',
    first_finales12:'',
    qualified_finales14:'',

   };
  constructor() { }
  clear1(){
    this.test.no='';
    this.test.nage='';
    this.test.date='';
    this.test.classement='';
    this.test.nb='';
  }
  clear2(){
    this.test.qualified_finales='';
    this.test.first_finales='';
    this.test.qualified_finales12='';
    this.test.first_finales12='';
    this.test.qualified_finales14='';
  }
  ngOnInit(): void {
  }

}
