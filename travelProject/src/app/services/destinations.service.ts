import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destinations } from '../models/destinations.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  destinationsUrl: string = 'http://localhost:8082/api/organizations'

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destinations>{
    const data: Observable<Destinations> = this.http.get<Destinations>(this.destinationsUrl);
    return data;
  }
}
