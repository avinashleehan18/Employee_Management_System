import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/getall`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create`,employee);
  }
  getEmployeeById(id:Number): Observable<Employee> {
 return this.httpClient.get<Employee>(`${this.baseURL}/get/${id}`);
}
updateEmployee(id:number,employee:Employee): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/update/${id}`, employee);
}

deleteEmployee(id:number): Observable<Object>
{
  return this.httpClient.delete(`${this.baseURL}/del/${id}`);
} 
}



