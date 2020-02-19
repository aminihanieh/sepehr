import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFarsi'
})
export class ToFarsiPipe implements PipeTransform {

  transform(value: string): unknown {
    switch(value) {
      case 'economy':
        return 'اکونومی';
        break;
      case 'A':
        return 'آ';
        break;
      default:
        // code block
    }



  }

}
