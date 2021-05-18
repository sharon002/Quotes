import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime)
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds / secondsInDay;
    console.log(dateCounter)
    if (dateCounter >= 1) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}
