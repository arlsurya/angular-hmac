import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Login } from '../interfaces/login';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  public API_URL = environment.API_URL;

  constructor(private httpClient:HttpClient) { }

public login(data: Login): Observable<any>{
  return this.httpClient.post(this.API_URL + '/login',data).pipe(
   catchError((error)=>{
    return throwError(()=>error)
   })
  )
}

}
