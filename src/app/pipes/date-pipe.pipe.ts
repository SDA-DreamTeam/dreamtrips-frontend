import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(departureDate: string, flag?: number): any {
    if (!departureDate) {
      return '';
    }
    let dt1 = new Date(departureDate);
    let currentDate = Date.now();
    let dt2 = new Date(currentDate);
    let onlyDays = Math.floor((Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) - Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate())) / (1000 * 60 * 60 * 24));

    let output = `${onlyDays} days`;
    return output;
  }

}


