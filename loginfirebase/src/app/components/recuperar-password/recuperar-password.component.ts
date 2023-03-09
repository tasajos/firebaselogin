import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit{

recuperarUsuario: FormGroup;
loading:boolean =false;


  constructor (private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private FirebaseError: FirebaseServiceService){

      this.recuperarUsuario = this.fb.group({

correo: ['', Validators.required]

      })
    }


  ngOnInit(): void {
  
  }
  recuperar(){
    const email = this.recuperarUsuario.value.correo;
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() =>{

      alert('Se envio el correo de recuperacion');
      this.router.navigate(['/login']);
      
    })
    .catch((error)=> {
      this.loading = false;
      alert(this.FirebaseError.CodeError(error.code))
    }
    )
  }
}
