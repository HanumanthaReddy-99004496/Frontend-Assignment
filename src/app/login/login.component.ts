import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('err', { static: true })
  MyDOMElement!: ElementRef;
 
  constructor(private router:Router) { }
  red='red';
  center='center'
  ngOnInit(): void {
  }

  username:string | undefined;
  password:string | undefined;

submitteddata(){
  if(this.username=='' || this.password==''){
    this.MyDOMElement.nativeElement.innerHTML="<strong>* fields can't be empty<strong>";
  }
  else if(this.username!='admin' || this.password!='admin'){
    this.MyDOMElement.nativeElement.innerHTML="<strong>Invalid Credentials<strong>";
  }
  else{
    this.router.navigate(['emp'])
  }
}

}



