import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  fetchData(){
    return this.http.get("http://localhost:4200/assets/json/api.json");
  }
}
