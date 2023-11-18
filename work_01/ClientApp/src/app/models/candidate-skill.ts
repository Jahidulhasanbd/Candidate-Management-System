import { Skill } from "./skill";

export class CandidateSkill {
  constructor(
    public candidateId?: number,
    public candidateName?: string,
    public birthDate?: Date,
    public picture?: string,
    public pictureFile?: File,
    public fresher?: boolean,
    public skillList?: Skill[]
  ) { }
}
