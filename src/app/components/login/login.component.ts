import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  form2;
  usuarios: any;
  band: Boolean;
  constructor(private formBuilder: FormBuilder, private bdservice: UsuarioService, private router: Router) {
    this.form = formBuilder.group({
      usuarior: ['', Validators.required],
      passwordr: ['', Validators.required],
    });
    this.form2 = formBuilder.group({
      usuariol: ['', Validators.required],
      passwordl: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }
  submit() {
    if (this.form.valid) {
      const register = this.form.value;
      this.bdservice.registrar(register.usuarior, register.passwordr).subscribe(data => {
        console.log(data);
        this.router.navigate(['/', 'home']);
      });


    } else {
      alert('Llena los campos');
    }
  }
// tslint:disable-next-line: align
submit2() {
    if (this.form2.valid) {
      const logins = this.form2.value;
      this.bdservice.getUsuarios().subscribe(data => {
        this.usuarios = data;
        // console.log(this.usuarios);
        for (const usuario of this.usuarios){
          if (usuario.Usuario === logins.usuariol && usuario.Contraseña === logins.passwordl){
            this.router.navigate(['/', 'home']);
            this.band = false;
            break;
          }else {
            this.band = true;
          }
        }
        if (this.band){
          alert('No coincide usuario con contraseña. Asegurese de estar registrado');
        }
      });
    } else {
      alert('Llena los campos');
    }
  }

}
