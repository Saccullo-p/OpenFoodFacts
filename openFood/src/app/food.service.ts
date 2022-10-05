import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'  
})
export class foodService {
    constructor(private http: HttpClient) { }

    getCaratteristiche(id: string) {
        
    }
}
