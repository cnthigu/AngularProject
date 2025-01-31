import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionarios } from 'src/app/Models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  btnAcao: string = "Editar!"
  btnTitulo: string = "Editar Funcionario"
  funcionario!: Funcionarios;
  constructor(private funcionarioSerice: FuncionarioService, private route: ActivatedRoute, private router: Router) {   
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioSerice.GetFuncionario(id).subscribe((data)=>{
    this.funcionario = data.dados;  
    }) 

  }

  EditarFuncionario(funcionario: Funcionarios){
    this.funcionarioSerice.EditarFuncionario(funcionario).subscribe((data)=> {
      this.router.navigate(['/'])
    })
  }
}
