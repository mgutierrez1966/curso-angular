import { ErrorHandler } from '@angular/core'

export class AppErrorHandler implements ErrorHandler {
    
    handleError(error: any): void {
        alert("Se ha producido un error inesperado");
        console.log(error);
    }

}