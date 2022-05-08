import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any): any {
    if(value !== "kicsi"){
        return  "Elég nagy";
  } else {
    return "Lehet pici lesz";
  }
}
}