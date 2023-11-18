export class Candidate {
  constructor(
    public candidateId?: number,
    public candidateName?: string,
    public birthDate?: Date,
    public picture?: string,
    public fresher?: boolean
  ) { }
}
