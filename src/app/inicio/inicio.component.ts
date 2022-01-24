import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(){

    window.scroll(0,0)

    if(environment.token == ''){
      alert('Sua sessão expirou, favor faça o login novamente')
      this.router.navigate(['/entrar'])
    }
  }

}
