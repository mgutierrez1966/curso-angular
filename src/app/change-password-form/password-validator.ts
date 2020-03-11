import { AbstractControl, ValidationErrors, FormControl, FormGroup } from '@angular/forms';

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
    };

    static passwordNotMatches(control: AbstractControl) : ValidationErrors | null {
        
        var newPassword = control.get('newPassword').value;
        var confirmPassword = control.get('confirmPassword').value;

        if (confirmPassword != newPassword) {
            return {
                passwordNotMatches : true
            }
        }
        return null;

    }

}
