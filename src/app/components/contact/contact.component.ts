import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private fb: FormBuilder){}

  messageText = '';
  headerText = '';

  form : FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    message: '',
    to_name: 'Kostiantyn'
  });
  
  send(){
    emailjs.init('yqCpkvt9KBBKcQGe2');
    emailjs.send('service_kzd9i0k','template_swzdbha', {
      to_name : this.form.value.to_name,
      from_name: this.form.value.from_name,
      message : this.form.value.message,
      from_email: this.form.value.from_email
    } , 
    "yqCpkvt9KBBKcQGe2")
    .then((response) => {
       this.messageText = "Your message have been sent. I will reach out to you soon :)";
       this.headerText = "Success!";
    }, (err) => {
      this.messageText = 'Failed. Try to catch up with me in LinkedIn then :)';
      this.headerText = "Failure!";
    });
  }
}
