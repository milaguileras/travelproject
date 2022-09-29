import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member.model';

@Injectable({
    providedIn: 'root'
})
export class MemberService {
    groupUrl: string = 'http://localhost:8082/api/groups'
    jsonContentTypeHeaders = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    constructor(private http: HttpClient){}

    getMembers():Observable<Member[]>{
        const data: Observable<Member[]> = this.http.get<Member[]>(this.groupUrl);
        return data
    }

    addMembers(groupId: number, member: Member): Observable<Member> {
        const results: Observable<Member> = this.http.post<Member>(
            `${this.groupUrl}/${groupId}/members`,
            member,
            this.jsonContentTypeHeaders);
        console.log(`addMemberToGroup() returned ${results}`);
        return results;
    }
}

