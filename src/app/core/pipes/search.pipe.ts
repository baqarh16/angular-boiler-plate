import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false  // Set to false to update the UI dynamically
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string, keys: string[]): any[] {
    if (!items || !searchTerm || !keys.length) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(item =>
      keys.some(key => 
        String(item[key]).toLowerCase().includes(searchTerm)
      )
    );
  }
}
