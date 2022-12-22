import {AbstractControl} from "@angular/forms";

export function phoneNumberValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const regex = new RegExp('^[0][7][0-9]{8}$');
    if (!regex.test(control.value)) {
      return {
        isError: true
      };
    }
  }
  return null;
}

export function passwordValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {

    const regex1=new RegExp('[a-z]{4,}')
    const regex2=new RegExp('[@\,\.?!$%#]{2,}')
    const regex3=new RegExp('[0-9]{2,}')
    if (!regex1.test(control.value) || !regex2.test(control.value) || !regex3.test(control.value)) {
      return {
        isError: true
      };
    }
  }
  return null;
}
export function passwordValidatorForCheckCpassword(control:AbstractControl){
  if (control && (control.value !== null || true)) {
    const cpass=control.value;

    const passControl=control.root.get('password');
    if (passControl){
      const passValue=passControl.value;
      if (passValue!==cpass || cpass === ''){
        return {
          isError: true
        };
      }
    }

  }
  return null;


  }

export function addressValidator(control: AbstractControl) {

  if (control && (control.value !== null || control.value !== undefined)) {
    const regex = new RegExp('[0-9]+[,]{1}[a-zA-Z]+[,]{1}[a-zA-Z]*');
    if (!regex.test(control.value)) {
      return {
        isError: true
      };
    }
  }
  return null;

}
