import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';

@Injectable({
    providedIn: 'root'
})
export class GroupService {
    groupUrl: string = 'http://localhost:8082/api/groups'
    jsonContentTypeHeaders = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    constructor(private http: HttpClient){}

    getGroups():Observable<Group[]>{
        const data: Observable<Group[]> = this.http.get<Group[]>(this.groupUrl);
        return data
    }

    addGroups(group: Group): Observable<Group> {
        const results: Observable<Group> = this.http.post<Group>(
            this.groupUrl,
            group,
            this.jsonContentTypeHeaders
        );
        console.log(`addGroup(${group}) returned ${results}`);
        console.log(typeof group.GroupId);
        return results;
    }
}

