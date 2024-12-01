import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthFunctionsService {
    private apiUrl = 'http://localhost:3000/users';
    constructor(private auth: AuthService, private http: HttpClient) { }

    
    async getUserId(): Promise<string | undefined> {
        const user = await firstValueFrom(this.auth.user$);
        return user?.sub;
    }

    
    async registerUser(): Promise<void> {
        const userId = await this.getUserId();
        if (!userId) return;

       
        const users = await firstValueFrom(this.http.get<any[]>(this.apiUrl));
        const userExists = users.some(user => user.userId === userId);

        if (!userExists) {
            
            await firstValueFrom(
                this.http.post(this.apiUrl, { userId })
            );
            console.log('Usuário registrado:', userId);
        } else {
            console.log('Usuário já registrado:', userId);
        }
    }
}
