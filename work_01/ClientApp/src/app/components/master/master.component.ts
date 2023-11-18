import { Component } from '@angular/core';
import { Skill } from '../../models/skill';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { NotifyService } from '../../services/notify.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  skillList: Skill[] = [];
  candidatePicture: File = null!;

  constructor(
    private dataSvc: DataService,
    private router: Router,
    private notifySvc: NotifyService
  ) { }

  candidateForm: FormGroup = new FormGroup({
    candidateId: new FormControl(undefined, Validators.required),
    candidateName: new FormControl(undefined, Validators.required),
    birthDate: new FormControl(undefined, Validators.required),
    fresher: new FormControl(undefined, Validators.required),
    skillList: new FormArray([])
  });

  get skillListArray() {
    return this.candidateForm.controls["skillList"] as FormArray;
  }

  addSkills() {
    this.skillListArray.push(new FormGroup({
      skillId: new FormControl(undefined, Validators.required)
    }));
  }

  removeSkillList(index: number) {
    if (this.skillListArray.controls.length > 0) {
      this.skillListArray.removeAt(index);
    }
  }
  ngOnInit() {
    this.dataSvc.getSkillList().subscribe((result) => {
      this.skillList = result;
    });
    this.addSkills();
  }

  onFileSelected(event: any) {
    this.candidatePicture = event.target.files[0];
  }

  insertCandidate() {
    var formData = new FormData();

    formData.append("SkillsStringify", JSON.stringify(this.candidateForm.get("skillList")?.value));
    formData.append("candidateName", this.candidateForm.get("candidateName")?.value);
    formData.append("birthDate", this.candidateForm.get("birthDate")?.value);
    formData.append("fresher", this.candidateForm.get("fresher")?.value);
    formData.append("pictureFile", this.candidatePicture, this.candidatePicture.name);

    this.dataSvc.postCandidateSkill(formData).subscribe(
      {
        next: r => {
          console.log(r);
          this.router.navigate(['/masterDetails']);
          this.notifySvc.message('Data inserted successfully!!', 'DISMISS');
        },
        error: err => {
          console.log(err);
        }
      });
  }
}
