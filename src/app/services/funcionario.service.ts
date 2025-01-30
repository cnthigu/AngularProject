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

}
