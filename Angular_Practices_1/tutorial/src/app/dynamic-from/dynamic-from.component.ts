import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface fileConfig {
  name: string;
  label: string;
  type:'txt' | 'number' | 'email' | 'password';
  validators: any[]; // Validators
}


@Component({
  selector: 'app-dynamic-from',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './dynamic-from.component.html',
  styleUrl: './dynamic-from.component.scss'
})
export class DynamicFromComponent implements OnInit{
  form!: FormGroup;
  submittedValue: any;
  fields: fileConfig[] = [
    { name: 'name', label: 'Nombre', type: 'txt', validators: [Validators.required, Validators.minLength(3)] },
    { name: 'age', label: 'Edad', type: 'number', validators: [Validators.required, Validators.min(18)] },
    { name: 'email', label: 'Email', type: 'email', validators: [Validators.required, Validators.email] },
    { name: 'password', label: 'Contraseña', type: 'password', validators: [Validators.required, Validators.minLength(6)] }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // 2. Construcción dinámica del FormGroup
    const group: any = {};
    this.fields.forEach(f => {
      group[f.name] = ['', f.validators];
    });
    this.form = this.fb.group(group);
  }
  onSubmit() {
    if (this.form.valid) {
      this.submittedValue = this.form.value;
      console.log('Enviado:', this.submittedValue);
    } else {
      // Marcar todos como tocados para mostrar errores
      this.form.markAllAsTouched();
    }
  }

}
