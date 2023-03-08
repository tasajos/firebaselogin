import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit{

  registrarUsuario: FormGroup;

  constructor (private fb: FormBuilder,
    private afAuth: AngularFireAuth ){
this,this.registrarUsuario = this.fb.group({
  email:['', Validators.required],
  password:['',Validators.required],
  repetirpassword:['',Validators.required],

})

  }

ngOnInit(): void {
}

registrarform (){
  const email = this.registrarUsuario.value.email;
  const password = this.registrarUsuario.value.password;
  const repetirpassword = this.registrarUsuario.value.repetirpassword;
  
  this.afAuth.createUserWithEmailAndPassword(email,password).then((user) => {
console.log (user);
  }).catch((error) => {

    console.log(error);
  })
  }

}




