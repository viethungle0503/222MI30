import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-login-sceen',
  templateUrl: './login-sceen.component.html',
  styleUrls: ['./login-sceen.component.css'],
})
export class LoginSceenComponent implements OnInit {
  @ViewChild('saveBox') saveBox!: ElementRef<HTMLInputElement>;
  public newUser = new user();
  public information = '';
  constructor(private router: Router) {
    this.newUser.email = this.getMail()?.toString();
    this.newUser.password = this.getPassword()?.toString();
  }

  ngOnInit() {}
  onSignIn() {
    let email = this.newUser.email;
    let password = this.newUser.password;
    if (email != undefined && password != undefined) {
      if (
        email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) == null
      ) {
        alert('Vui lòng nhập đúng định dạng email');
        return;
      }

      if (password?.length < 5) {
        alert('mật khẩu tối thiểu 5 ký tự');
        return;
      }
      this.information = `${email} - ${password}`;
      if (this.saveBox.nativeElement.checked == true) {
        this.setMail(email);
        this.setPassword(password);
      }
      // setTimeout(() => {
      //   this.router.navigate(['lunaryear']);
      // }, 2000);
    }
  }
  public getMail() {
    return localStorage.getItem('email');
  }
  public setMail(value: string) {
    localStorage.setItem('email', value);
  }
  public getPassword() {
    return localStorage.getItem('password');
  }
  public setPassword(value: string) {
    localStorage.setItem('password', value);
  }
  public clearData() {
    localStorage.clear();
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }
}
class user {
  email?: string;
  password?: string;
  constructor();
  constructor(name: string, pass: string);
  constructor(name?: string, pass?: string) {
    this.email = name;
    this.password = pass;
  }
}
