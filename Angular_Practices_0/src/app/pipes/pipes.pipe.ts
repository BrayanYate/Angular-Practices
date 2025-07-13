import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes',
  standalone: true,
})

export class PipesPipe implements PipeTransform {

  transform(value: string): string {
    console.log('PipesPipe transform called with value:', value);
    //validar que el valor no sea un numero
    if (/^\d+$/.test(value)) {
      return value;
    }
    //invertir la cadena de texto 
    return value.split('').reverse().join('');

  }

}
