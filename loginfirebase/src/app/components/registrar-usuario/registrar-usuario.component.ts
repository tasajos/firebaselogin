import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit{

  registrarUsuario: FormGroup;

  constructor (private fb: FormBuilder){
this,this.registrarUsuario = this.fb.group({
  email:['', Validators.required],
  password:['',Validators.required],
  repetirpassword:['',Validators.required],

})

  }

ngOnInit(): void {
}

registrarform (){
  console.log(this.registrarUsuario)
}



}
