import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']

})
export class RegistroComponent implements OnInit {
  usuario:User = new User();

  constructor(private usuarioServicio:UsuarioService, private router:Router){}

  ngOnInit(): void {
  }

  guardarUsuario(){
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(
      dato => {
        console.log(dato);
      },
      error => console.log(error)
    );
  }

  onSubmit(){
    this.guardarUsuario();
  }

}
