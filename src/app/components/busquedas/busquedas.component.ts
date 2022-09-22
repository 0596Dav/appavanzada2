import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginuser } from 'src/app/interfaces/loginuser';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.css']
})
export class BusquedasComponent implements OnInit {
  
  loginuser: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginuser= this.fb.group({
      usuario:['',Validators.required],
      passw:['',Validators.required]
      
    })
   }

  ngOnInit(): void {
  }

  iniciar(){
    console.log(this.loginuser);

    const inicio:loginuser={
      usuario: this.loginuser.get('usuario')?.value,
      passw: this.loginuser.get('passw')?.value
    }
    console.log(inicio);
  }

}