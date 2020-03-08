import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {

    static oldPasswordValid(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if (control.value != "1234") {
                resolve({
                    oldPasswordValid : true
                });
            }
            else 
                resolve(null);
        });
    }

}
