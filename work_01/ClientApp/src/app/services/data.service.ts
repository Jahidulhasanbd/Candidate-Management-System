import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';
import { CandidateSkill } from '../models/candidate-skill';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getSkillList(): Observable<Skill[]> {
    return this.http.get<Skill[]>("http://localhost:5215/api/Candidates/GetSkills");
  }

  postCandidateSkill(data: FormData): Observable<CandidateSkill> {
    return this.http.post<CandidateSkill>("http://localhost:5215/api/Candidates", data);
  }
}
