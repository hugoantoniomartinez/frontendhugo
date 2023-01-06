import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {
  url = 'http://localhost:8080/api/comprador'

  constructor(private http: HttpClient) { }

  mostrar():Observable<any>{
    return this.http.get<any>(this.url)
  }
}
