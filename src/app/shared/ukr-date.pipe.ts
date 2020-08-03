import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ukrDate'
})
export class UkrDatePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): string {
    let date = new Date(value);
    let result = date.toLocaleString("uk-ua", { day: "numeric", month: "long", year: "numeric"}).slice(0, -3);
    return result;
  }

}
