import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'resumen'
})
export class ResumenPipe implements PipeTransform {

    transform(value:string, args:any) {
        return value.substr(value, 2) + "...";
        
    }
}
