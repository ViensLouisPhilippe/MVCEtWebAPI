import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngMVCEtWebAPI';

  registerUsername : string = "";
  registerEmail : string = "";
  registerPassword : string = "";
  registerPasswordConfirm : string = "";

  loginUsername : string = "";
  loginPassword : string = "";

  constructor(public http : HttpClient) { }


  async TestPublic() : Promise<any>{
    let x = await lastValueFrom(this.http.get<any>("https://localhost:7060/api/Account/PublicTest"));
    console.log(x);
    alert(x);
    return x;
  }
  async TestPrivate() : Promise<any>{
    let x = await lastValueFrom(this.http.get<any>("https://localhost:7060/api/Account/PrivateTest"));
    console.log(x);
    alert(x);
    return x;
  }

  async Login() : Promise<any>{
    let loginDTO = {
      username : this.loginUsername,
      password : this.loginPassword,
    };
    let x = await lastValueFrom(this.http.post<any>("https://localhost:7060/api/Account/Login", loginDTO));
    sessionStorage.setItem("token", x.token);
    console.log(x);
    alert("Connecté")
  }

  async Register() : Promise<any>{
    
    let registerDTO = {
      username : this.registerUsername,
      email : this.registerEmail,
      password : this.registerPassword,
      passwordConfirm : this.registerPasswordConfirm
    };
    let x = await lastValueFrom(this.http.post<any>("https://localhost:7060/api/Account/Register", registerDTO));
    console.log(x);
    alert("utilisateur inscrit")
    return x;
  }

  async Logout() : Promise<any>{
    sessionStorage.removeItem("token");
    location.reload();
  }
}
