import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/Components/data-table/data-table.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}

getCustomersLarge() {
    return this.http
        .get<any>('assets/customers.json')
        .toPromise()
        .then((res:any) => <Customer[]>res.data)
        .then((data:any) => {
            return data;
        });
}
}
