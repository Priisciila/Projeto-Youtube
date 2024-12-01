import { Component } from '@angular/core';
import { AuthFunctionsService } from './services/auth-functions.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube';
  constructor(private authFunctionsService: AuthFunctionsService) {}

  async ngOnInit() {
    await this.authFunctionsService.registerUser();
  }
}
