import { Patient } from '../../app/Models/Patient'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterApiService {

  constructor(private http:HttpClient) { }

  GetAllData(){
    return this.http.get<Patient>('https://localhost:44370/api/EFData/GetData');
  }
}
