import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso',
  standalone: true
})
export class ReversoPipe implements PipeTransform {

  transform(value:string): string {
  console.log('ReversoPipe transform called');  
    // valida que el valor sea una cadena de texto
  if (/^\d+$/.test(value)) {
    return value;
  }
    // invierte la cadena de texto
    return value.split('').reverse().join('');
    
  }

}
