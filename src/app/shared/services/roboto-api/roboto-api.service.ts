import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RobotoApiService {

  constructor(
    private http: HttpClient
  ) { }

  get = (operation, params: any = {}): Observable<any> => {
    const endpoint = `${environment.robotoApi}/${operation}`;
    return this.http.get(endpoint, params);
  }

  post = (operation, body: any = {}): Observable<any> => {
    const endpoint = `${environment.robotoApi}/${operation}`;
    return this.http.post(endpoint, body);
  }
}
