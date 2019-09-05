import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  pure: false
})
export class ShortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
