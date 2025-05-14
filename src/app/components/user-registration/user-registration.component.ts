import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interfaces/user';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-registration',
  imports: [MatFormFieldModule, MatInputModule,MatButtonModule,ReactiveFormsModule, MatSelectModule,MatIconModule ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

  userService = inject(UserService)

  registrationStatus : {success : boolean, message : string}= {
    success : false,
    message: 'Not attempted yet'
  }


  form = new FormGroup({
    username: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    surname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormGroup({
      area: new FormControl(''),
      road: new FormControl('')
    }),
    phone: new FormArray([
      new FormGroup({
        number: new FormControl('', Validators.required),
        type : new FormControl('', Validators.required)
      })
    ]),
    password: new FormControl('',[Validators.required, Validators.minLength(5)]),
    confirmPassWord : new FormControl('', [Validators.required, Validators.minLength(5)])
  },

  this.passwordConfirmValidator

  )

  passwordConfirmValidator(control: AbstractControl): {[key:string]: boolean} | null {
    const form = control as FormGroup

    const password = form.get('password')?.value
    const confirmPassWord = form.get('confirmPassWord')?.value

    if(password && confirmPassWord && password!==confirmPassWord) {
      form.get('confirmPassWord')?.setErrors({passwordMismatch: true})
      return {passwordMismatch: true}
    }

    return null
  }

  phone = this.form.get('phone') as FormArray

  addPhoneNumber(){
    this.phone.push(
      new FormGroup({
        number: new FormControl('', Validators.required),
        type : new FormControl('', Validators.required)
      })
    )
  }

  removePhoneNumber(index : number){
    this.phone.removeAt(index)
  }


  onSubmit(){
    console.log(this.form.value)
    // const data = this.form.value as User
    const data : User = {
      'username': this.form.get('username')?.value || '',
      'password': this.form.get('password')?.value || '',
      'name': this.form.get('name')?.value || '',
      'surname': this.form.get('surname')?.value || '',
      'email': this.form.get('email')?.value ||'',
      'address': {
        'area': this.form.controls.address.controls.area?.value || '',
        'road': this.form.controls.address.controls.road?.value ||''
      }
    }
    console.log(data)

    this.userService.registerUser(data)
      .subscribe({
        next: (response) =>{
          console.log("user saved", response)
          this.registrationStatus = {success: true, message: "User registered"}
          
        },
        error: (response)=>{
          console.log('User Not Saved ', response.error.data.errorResponse.errmsg)
          this.registrationStatus = {success: false, message: response.error.data.errorResponse.errmsg}
        }
      })
    
  }

  check_dublicate_email(){
   const email = this.form.get('email')?.value

   if(email){
      this.userService.check_dublicate_email(email).subscribe({
        next : (response) => {
          console.log(response)
          this.form.get('email')?.setErrors(null)
        },
        error : (response)=>{
            console.log(response)
            const message = response.data
            console.log(message)
            this.form.get('email')?.setErrors({dublicateEmail : true})
        }
      })
      

      
   }
  }


  registerAnother(){
    this.form.reset()
    this.registrationStatus = {success : false , message : "Not attempted yet"}
  }

}
