import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLenght'
})
export class MaxLenghtPipe implements PipeTransform {

  transform(maxlenght:string,number:number): string {
    return maxlenght.substring(0,number).concat('....');
  }

}
