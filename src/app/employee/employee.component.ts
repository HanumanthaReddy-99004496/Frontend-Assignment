
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services.service';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private services: ServicesService) {}
   apidata: any[] = [];
   columns: any[] = [];
   name:string="";
   age:number=0;
   salary:number=0;

  ngOnInit() {
    this.services.fetchData().subscribe(fetcheddata => {
      const entries=Object.entries(fetcheddata);
      this.apidata=entries[1][1];
      this.columns=Object.keys(entries[1][1][0]);
    });
  }
  displayStyle = "none"
  edit(row:any){

    this.age=61;
    this.name="Tiger Nixon";
    this.salary=320800;
    this.displayStyle = "block";

  }
  closePopup(){
    this.displayStyle = "none";
  }
}


