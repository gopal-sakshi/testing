import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app69-cognito-sign-in-custom1',
  templateUrl: './cognito-sign-in-custom1.component.html',
  styleUrls: ['./cognito-sign-in-custom1.component.scss']
})
export class CognitoSignInCustom1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateToSignIn() {
    var customDomain:string = 'gopal612-domain23.auth.us-east-1.amazoncognito.com';
    var clientId:string = environment.cognito.userPoolWebClientId1;
    var redirect_url1:string = 'http://localhost:9999/random12';
    var redirect_url2:string = 'http://localhost:9999/cognito23/profile';
    const url1 =`https://${customDomain}/login?response_type=code&client_id=${clientId}&redirect_uri=${redirect_url2}`;
    const url2 =`https://${customDomain}/login?response_type=token&client_id=${clientId}&redirect_uri=${redirect_url2}`;
    
    window.open(url1, "_self");    // opens in same tab     _blank = opens in new tab
  }
}


/*
  Important URLs for User Pool

  https://blogdemo.auth.us-west-2.amazoncognito.com/oauth2/authorize                                // Authorization Endpoint
  https://blogdemo.auth.us-west-2.amazoncognito.com/oauth2/token                                    // token endpoint
  https://blogdemo.auth.us-west-2.amazoncognito.com/oauth2/userInfo                                 // userInfo endpoint
  https://blogdemo.auth.us-west-2.amazoncognito.com/login                                           // login endpoint
  https://blogdemo.auth.us-west-2.amazoncognito.com/logout?logout_uri=https://blogdemo.rcbj.net     // logout endpoint
  

  Had I used const url2   // response_type=token
      http://localhost:9999/cognito23/profile#id_token=eyJraWQiOiJOdGRlSEh0ejYzK1RuZng5c0N2SkhteUVHTWhWT1wvK0FFXC8xV053XC9SdGpZPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiTFdWMXR2NWRyNFo5WEJuT2xDS2ZNQSIsInN1YiI6Ijc5N2FjZThkLTQwNWMtNGRmMS04NDc2LWU1OTUzYjYzYTdlMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9mSm5qZ3ZRVWUiLCJjb2duaXRvOnVzZXJuYW1lIjoiNzk3YWNlOGQtNDA1Yy00ZGYxLTg0NzYtZTU5NTNiNjNhN2UzIiwiYXVkIjoiNGtqZDV2anAxdTIxM25nYzJtdTJlcm1vaWEiLCJldmVudF9pZCI6ImU4YmFkNTRkLTkxNDQtNDcwYy05MzRkLTc0OTUzY2M1ZDc3MCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjYyOTgwMjI2LCJleHAiOjE2NjI5ODM4MjYsImlhdCI6MTY2Mjk4MDIyNywianRpIjoiNTg5Zjk3ZTEtYjIwZi00YjQ3LTllN2QtMjI5OGQwYWQ4MjEyIiwiZW1haWwiOiJwZWRhYmljYXJAZ21haWwuY29tIn0.tzzImjbTpz2LknBdSyYfM7cZRz4ORVu1YKJJCOvvFeFlmvsYzJ6kwS0yb03kQzPkowLqlFgM7cNMxd7NKNm0u9aZmy69MDZfQ0jcrFvE0Ar5ROevuyyK7xoGPgR_nxvMZ_sldmAb-6KiKdud1AHy7w9NF6o23pGkjT0H7FSmj-HA2pxfYZOKty4sMNIfVYzdXUUxQQ0T1J8QO5XTegXbunxnrhc8MZ_f2aaA0LyDtFzqF4jX0FQd3YsLImZmSQL-5WOqHV_cEf26gbnbtEA2Dc7I2OZSyAmvzEizu5mU_2DgnDjRMe3AAFh03RSOO1zEdwkQNKsTFL8amriVd7j8Ig&access_token=eyJraWQiOiJvVWdWeE5YUEJUNmppTHZJSmZwZlg3dlljUFNBTzVnbFR4endMVGZQTHlnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3OTdhY2U4ZC00MDVjLTRkZjEtODQ3Ni1lNTk1M2I2M2E3ZTMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9mSm5qZ3ZRVWUiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI0a2pkNXZqcDF1MjEzbmdjMm11MmVybW9pYSIsImV2ZW50X2lkIjoiZThiYWQ1NGQtOTE0NC00NzBjLTkzNGQtNzQ5NTNjYzVkNzcwIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJvcGVuaWQgZW1haWwiLCJhdXRoX3RpbWUiOjE2NjI5ODAyMjYsImV4cCI6MTY2Mjk4MzgyNiwiaWF0IjoxNjYyOTgwMjI3LCJqdGkiOiIwMWY5M2FlNi1iY2VmLTQzYTYtYmE3MS00YTBhMjZmMzYwZjgiLCJ1c2VybmFtZSI6Ijc5N2FjZThkLTQwNWMtNGRmMS04NDc2LWU1OTUzYjYzYTdlMyJ9.bIt9ULeOEd3qRPESKzp0EAbKwYkHkYv14WNYMn488wyiIsriDwKworbLEjhbx_MkR_Xc4IHAQfrjKKOL-awQ8dB4bnB73zn1NEmigQLWZxuZlFoiTmAoo8OcHF_0mR7lBDcl0dN7LmnqfVj1LYO6YbhF99Mwm6ElX1D5UBdqHol0WtPRP_IDIhqZvCHRs5UrzZc21U_qkViA7vR5AN0fQyR90-5cqT0ikthTiYXYv9FVBA2i38h7ad-sLAGEuM04JNGurJLb7tQgE-hsFiWx_qRkM0Cv6zLJi0KHROPqephmw3EJxnc1jj2htAEWqiCGiwGJkM1s8u3FltgUP14aHA&expires_in=3600&token_type=Bearer
  
  The URL itself consists of JWT token.... which is not good practice...
  Hence it is recommended to use const url1   // response_type=code


  https://gopal612-domain23.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=4kjd5vjp1u213ngc2mu2ermoia&redirect_uri=http://localhost:9999/cognito23/profile


  https://gopal612-domain23.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=4kjd5vjp1u213ngc2mu2ermoia&redirect_uri=http://localhost:9999/cognito23/profile
*/