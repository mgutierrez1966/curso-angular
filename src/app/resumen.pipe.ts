import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'resumen'
})
export class ResumenPipe implements PipeTransform {

    transform(value: any, args: any) {

        if (!value)
            return null
        else
            return value.substr(value, 2) + "...";

    }
}
