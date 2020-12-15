import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {

  constructor(private http: HttpClient) {}

  guardarPacientes(datosPaciente) {
    return this.http.post(`${environment.base_url}/patients`, datosPaciente);
  }

  obtenerPaciente() {
    return this.http.get(`${environment.base_url}/patients`);
  }
}
