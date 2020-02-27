import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    
    static sinEspacios(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(" ") >= 0) {
            return {
                sinEspacios: true
            }
        }

        return null;
    }

    static debeSerUnico(control: AbstractControl) : Promise<ValidationErrors | null> {
        
        return new Promise(
            (resolve, reject) => {
                setTimeout(()=>{
                    if (control.value=== 'Mosh') {
                        resolve({debeSerUnico : true}) 
                    }
                    else {
                        resolve(null);
                    }
                }, 2000);
        });
    }
}