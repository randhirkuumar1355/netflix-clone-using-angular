import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  public get(url: string, reqInput?: any): Observable<any> {
    const paramInputs = { params: reqInput ? reqInput : undefined };
    return this.http.get<Observable<any>>(url, paramInputs);
  }
}
