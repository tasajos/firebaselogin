import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, UrlSerializer } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit{

  registrarUsuario: FormGroup;
  loading: boolean = false;
  constructor (private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    
    ){
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

  if(password !== repetirpassword){

    alert(('Las contraseñas deben ser las mismas'));
    return;
  }

this.loading =   true;
  this.afAuth.createUserWithEmailAndPassword(email,password).then((user) => {
    this.loading=false;
    alert(('El usuario fue registrado con exito'));
    this.router.navigate(['/login']);
console.log (user);
  }).catch((error) => {
    console.log(error);
    //this.toastr.error(this.firebaseError(error.code),'Error')
    this.loading=false;
    alert(this.firebaseError(error.code))
  })
  }

  firebaseError(code:string){
switch(code){
  case 'auth/email-already-in-use':
    return 'El usuario ya existe'
  case 'auth/weak-password':
    return 'La contraseña es muy debil'
 case 'auth/invalid-email':
    return 'Correo Invalido'
  default:
    return 'Error desconocido'
}

  }

}




