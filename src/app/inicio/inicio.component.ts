import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaTemas: Tema[]

  constructor(
    private auth: AuthService,
    private router: Router,
    private temaService: TemaService) { }

  ngOnInit(){

    window.scroll(0,0)

    if(environment.token == ''){
      alert('Sua sessão expirou, favor faça o login novamente')
      this.router.navigate(['/entrar'])
    }

  }
  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }
}
