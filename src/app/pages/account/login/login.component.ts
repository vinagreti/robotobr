import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user;
  title: string;
  subtitle: string;

  constructor(
    public authService: AuthService,
  ) {
    this.title = 'Entrar';
    this.subtitle = 'Acesse a página de administração de seu perfil';
  }

  ngOnInit() {}

  loginGoogle = () => {
    this.authService.loginGoogle()
    .then((res) => {
      console.log(`Logged with Google`, res);
    });
  }

  loginFacebook = () => {
    this.authService.loginFacebook()
    .then((res) => {
      console.log(`Logged with Facebook`, res);
    });
  }

  loginGithub = () => {
    this.authService.loginGithub()
    .then((res) => {
      console.log(`Logged with Github`, res);
    });
  }

  loginTwitter = () => {
    this.authService.loginTwitter()
    .then((res) => {
      console.log(`Logged with Twitter`, res);
    });
  }

}
