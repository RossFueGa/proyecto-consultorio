import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {

  constructor(private http: HttpClient) {}

  guardarDoctor(datosDoctor) {
    return this.http.post(`${environment.base_url}/doctors`, datosDoctor);
  }

  obtenerDoctor() {
    return this.http.get(`${environment.base_url}/doctors`);
  }
}
