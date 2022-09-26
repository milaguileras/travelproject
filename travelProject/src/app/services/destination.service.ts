import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destination } from '../models/destination.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  destinationsUrl: string = 'http://localhost:8082/api/organizations'

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destination[]>{
    const data: Observable<Destination[]> = this.http.get<Destination[]>(this.destinationsUrl);
    return data;
  }
}
