import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionarios } from 'src/app/Models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  
  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Funcionario"
             
  constructor(private funcionarioService: FuncionarioService, private router: Router) {
    
  }

  createFuncionario(funcionario: Funcionarios){
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate([''])
    });

  }
}
