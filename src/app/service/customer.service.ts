import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const Basic_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  postCustomer(customer: any): Observable<any> {
    return this.http.post(Basic_URL + "/api/customer", customer);
  }

  getAllCustomers(): Observable<any> {
    return this.http.get(Basic_URL + "/api/customers");
  }

  deleteCustomer(id:number):Observable<any>{

    return this.http.delete(Basic_URL + "/api/customer/"+ id);
  }

  getCustomerById(id:number): Observable<any> {
    return this.http.get(Basic_URL + "/api/customer/" + id);
  }

  updateCustomer(id:number, customer:any): Observable<any> {
    return this.http.put(Basic_URL + "/api/customer/" + id, customer);
  }

}
