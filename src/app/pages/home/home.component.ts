import { Component, OnInit } from '@angular/core';
import { Funcionarios } from 'src/app/Models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
[x: string]: any;

  constructor(private funcionarioService: FuncionarioService){}

  funcionarios: Funcionarios[] = [];
  funcionariosGeral: Funcionarios[] = [];

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe(data => {
      const dados = data.dados;
      dados.map(item => {
        console.log(item);
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR');
      });

      this.funcionarios = data.dados;
      this.funcionariosGeral = data.dados;

    });
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })
  }
}
function search(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit): Event; prototype: Event; readonly NONE: 0; readonly CAPTURING_PHASE: 1; readonly AT_TARGET: 2; readonly BUBBLING_PHASE: 3; }) {
  throw new Error('Function not implemented.');
}

