import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseDate',
})
export class ParseDatePipe implements PipeTransform {
  transform(date: string): string {
    return new Date(date).toISOString().split('T')[0];
  }
}
