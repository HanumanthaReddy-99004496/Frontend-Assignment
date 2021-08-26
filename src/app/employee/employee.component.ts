import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  city: any;
  name: any;
  constructor(private http: HttpClient) {}
   apidata: any[] = [];
   columns: any[] = [];
  ngOnInit() {
    this.http.get("http://localhost:4200/assets/json/api.json").subscribe(fetcheddata => {
      const entries=Object.entries(fetcheddata);
      this.apidata=entries[1][1];
      this.columns=Object.keys(entries[1][1][0]);
    });
  }
  displayStyle = "none"
  edit(){
    this.displayStyle = "block";
    
  }
  closePopup(){
    this.displayStyle = "none";
  }
}


