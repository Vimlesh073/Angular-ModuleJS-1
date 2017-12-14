import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name:'subpipe'
})
export class SubPipe implements PipeTransform {
  public transform(value:string,prefix:string,range:number){
    return prefix.toUpperCase() + value.toString().substring(0,range);
  }
}
