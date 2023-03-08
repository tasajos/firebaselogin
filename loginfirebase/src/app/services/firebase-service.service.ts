import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor() { }
  CodeError(code:string){
    switch(code){
      //el correo ya existe
      case 'auth/email-already-in-use':
        return 'El usuario ya existe'
        //contrase;a debil
      case 'auth/weak-password':
        return 'La contraseña es muy debil'
        //correo invalido
     case 'auth/invalid-email':
        return 'Correo Invalido'
      default:
        return 'Error desconocido'
//Contraseña Incorrecta
        case 'auth/wrong-password':
          return 'Contraseña Incorrecta'


       //Usuario no Encontrado
          case 'auth/user-not-found':
            return 'Usuario no Encontrado'
    }
}
}