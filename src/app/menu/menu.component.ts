import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  nome = environment.nome
  foto = environment.foto

//  usar o código abaixo para testes
  // nome = "Yuri Silva"
  // foto = "https://i.imgur.com/jx01Ii7.jpg"

  constructor(private router: Router) { }

  ngOnInit(){
  }

  sair(){
    this.router.navigate(['/entrar'])

    environment.id=0
    environment.token=''
    environment.nome=''
    environment.foto=''
  }

}
