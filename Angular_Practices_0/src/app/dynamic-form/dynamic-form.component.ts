import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface fileConfig { 
  name: string;
  label: string;
  type: 'txt' | 'number' | 'email' | 'password';
  validators: any[];
}

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  form!: FormGroup;
  submittedValue: any;
  fields: fileConfig[] = [
    {
      name: 'name',
      label: 'Nombre',
      type: 'txt',
      validators: [Validators.required, Validators.minLength(3)]
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      validators: [Validators.required, Validators.email]
    },
    {
      name: 'age',
      label: 'Edad',
      type: 'number',
      validators: [Validators.required, Validators.min(18)]
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      validators: [Validators.required, Validators.minLength(6)]
    }
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   // Construcion del fromulario dinamico
    const group: any = {};
    this.fields.forEach(field => {
      group[field.name] = ['', field.validators];
    });
    this.form = this.fb.group(group);
  }
  OnSubmit() {
      if (this.form.valid) {
        this.submittedValue = this.form.value;
        console.log('Enviado', this.submittedValue);
      } else {
        console.log('Form is invalid');
      }
    }

}
