import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User, Credentials, LoggedInUser } from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const API_URL = `${environment.apiURL}/api/users`;
const API_URL_AUTH = `${environment.apiURL}/api/auth`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  router = inject(Router);

  user$ = signal<LoggedInUser | null>(null);

  constructor() {

    const access_token = localStorage.getItem('access_token');
      if (access_token) {
        const decodedTokenSubject = jwtDecode(
          access_token,
        ) as unknown as LoggedInUser;
        this.user$.set({
          username: decodedTokenSubject.username,
          email: decodedTokenSubject.email,
          roles: decodedTokenSubject.roles,
        });
      }
    effect(() => {
      if (this.user$()) {
        console.log('User Logged IN', this.user$()?.username);
      } else {
        console.log('User Not Logged in');
      }
    });
  }

  registerUser(user: User) {
    return this.http.post<{ status: boolean; data: User }>(`${API_URL}`, user);
  }

  check_dublicate_email(email: string) {
    return this.http.get<{ status: boolean; data: User }>(
      `${API_URL}/check_duplicate_email/${email}`,
    );
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{ status: boolean; data: string }>(
      `${API_URL_AUTH}/login`,
      credentials,
    );
  }

  logoutUser() {
    this.user$.set(null);
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) return true;

    try {
      const decoded = jwtDecode(token);
      const exp = decoded.exp;
      const now = Math.floor(Date.now() / 1000);
      if (exp) {
        return exp < now;
      } else {
        return true;
      }
    } catch (e) {
      return true;
    }
  }

  redirectToGoogleLogin() {
    const clientId =  '266840503841-hlp5tced8r5u0q034hrpc201gpd1ofi4.apps.googleusercontent.com'
    const redirectUri = 'http://localhost:3000/api/auth/google/callback'
    const scope = 'email profile'  
    const responseType = 'code'
    const accessType = 'offline'

    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}`

    window.location.href = url
  }
}



// https://accounts.google.com/o/oauth2/auth?client_id=266840503841-hlp5tced8r5u0q034hrpc201gpd1ofi4.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/auth/google/callback&response_type=code&scope=email%20profile&access_type=offline
