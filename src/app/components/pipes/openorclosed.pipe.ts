import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'openorclosed',
  standalone: true
})
export class OpenorclosedPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Aberto' : 'Fechado'
  }

}
