import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionarios } from '../Models/Funcionarios';
import { Response } from '../Models/Response';  

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private ApiUrl = `${environment.ApiRul}/Funcionario`;
  constructor(private http: HttpClient) { }

  GetFuncionarios() : Observable<Response<Funcionarios[]>>{
    return this.http.get<Response<Funcionarios[]>>(this.ApiUrl);
  }

  GetFuncionario(id: number) : Observable<Response<Funcionarios>> {
    return this.http.get<Response<Funcionarios>>(`${this.ApiUrl}/${id}`);
  }


  CreateFuncionario(Funcionarios: Funcionarios) :  Observable<Response<Funcionarios[]>>{
    return this.http.post<Response<Funcionarios[]>>(this.ApiUrl, Funcionarios);
  }
  
  
  EditarFuncionario(Funcionarios : Funcionarios) : Observable<Response<Funcionarios[]>>{
    return this.http.put<Response<Funcionarios[]>>(`${this.ApiUrl}`, Funcionarios);
  }

  InativaFuncionario(id: number): Observable<Response<Funcionarios[]>> {
    return this.http.put<Response<Funcionarios[]>>(`${this.ApiUrl}/inativaFuncionario?id=${id}`, null);

  }
}