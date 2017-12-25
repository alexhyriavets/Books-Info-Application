import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
        return [];
    }
    if (!searchText || searchText === 'all') {
        return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(it =>  it.genre.toLowerCase().includes(searchText));

   }
}


