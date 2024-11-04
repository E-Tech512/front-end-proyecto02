import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cabezera',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabezera.component.html',
  styleUrl: './cabezera.component.css'
})
export class CabezeraComponent implements OnInit{
  usuario!: User;
  constructor(private usuarioService:UsuarioService,private route:ActivatedRoute){}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id')) || 1;
    this.get(userId);
  }

  get(id:number):void{
    this.usuarioService.getUserId(id).subscribe({
      next:(foundUser:User)=>{
        this.usuario=foundUser;
      },
      error:(err: any)=>{
        console.error('Error al obtenr el usuario ', err)
      }
    })
  }
  obtenerRol():string{
    return this.usuario.esAdministrador ? 'Administrador':'Usuario';
  }
  /*

  usuario: User={
    id: 1,
    nombre:'Juansss',
    apellido:'felino',
    esAdministrador:false
  };
  obtenerRol():string{
    return this.usuario.esAdministrador ? 'Administrador':'Usuario';
  }
    */

}
