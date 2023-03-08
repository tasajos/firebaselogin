import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, UrlSerializer } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';

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
    private FirebaseError: FirebaseServiceService,
    
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
    alert(this.FirebaseError.CodeError(error.code))
  })
  }

  

  

}




