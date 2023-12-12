import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trending:any[],terms:string): any[] {
    return trending.filter((data)=>data.title.toLowerCase().includes(terms.toLowerCase()));
  }

}
