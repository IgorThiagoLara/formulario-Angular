import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  show: boolean = false;

  testForm!: FormGroup;

  ngOnInit(): void{
    this.testForm = new FormGroup({
      id: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      logradouro: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      complemento: new FormControl('')
    });
  }

  get city(){
    return this.testForm.get('city')!;
  }

  get bairro(){
    return this.testForm.get('bairro')!;
  }

  get logradouro(){
    return this.testForm.get('logradouro')!;
  }

  get number(){
    return this.testForm.get('number')!;
  }

  get complemento(){
    return this.testForm.get('complemento')!;
  }

  submit(){
    if(this.city.invalid || this.bairro.invalid || this.logradouro.invalid){
      this.testForm.markAllAsTouched();
      return;
    }

    this.city.disable();
    this.bairro.disable();
    this.logradouro.disable();

    this.show = true;

    if(!this.number.invalid){
      alert("Formulário enviado com sucesso");
      console.log("Formulário enviado!");
      window.location.reload();
    }
  }
}
