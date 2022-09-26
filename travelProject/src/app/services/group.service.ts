import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';

@Injectable({
    providedIn: 'root'
})
export class GroupService {
    groupUrl: string = 'http://localhost:8082/api/groups'

    constructor(private http: HttpClient){}

    getGroups():Observable<Group[]>{
        const data: Observable<Group[]> = this.http.get<Group[]>(this.groupUrl);
        return data
    }
}

