import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: string, args: number) : string {
    // let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    // let trail = args.length > 1 ? args[1] : '...';
    let word = value.split('،')[0].slice(0,args)
 return word
  }
}
