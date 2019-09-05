import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shotennPipe'
})
export class ShotennPipePipe implements PipeTransform {

  transform(value: any, args: number): any {
    if (value.length > 10) {
      return value.substr(0, args) + '....';
    }
  }
}
