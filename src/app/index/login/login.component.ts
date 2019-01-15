import {NotificationService} from '../../shared/services/notification.service';
import {NgForm, EmailValidator} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {User} from '../../shared/models/user';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [EmailValidator]
})
export class LoginComponent implements OnInit {
  user = {
    emailId: '',
    loginPassword: ''
  };

  errorInUserCreate = false;
  errorMessage: any;
  createUser;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createUser = new User();
  }

  ngOnInit() {
  }

  signInWithEmail(userForm: NgForm) {
    this.authService
      .signInRegular(userForm.value['emailId'], userForm.value['loginPassword'])
      .then((res) => {
        this.notificationService.success('Authentication Success', 'Logging in please wait');

        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

        setTimeout((router: Router) => {
          this.router.navigate([returnUrl || '/']);
        }, 1500);

        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.notificationService.error('Authentication Failed', 'Invalid Credentials, Please Check your credentials');
      });
  }

}
