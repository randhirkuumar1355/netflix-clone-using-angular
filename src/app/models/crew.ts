export class Crew {
    public id: number;
    public credit_id: string;
    public adult: boolean;
    public department: string;
    public gender: number;
    public job: string;
    public known_for_department: string;
    public name: string;
    public original_name: string;
    public popularity: number;
    public profile_path: string;
    constructor() {
        this.id = 0;
        this.credit_id = '';
        this.adult = false;
        this.department = '';
        this.gender = 0;
        this.job = '';
        this.known_for_department = '';
        this.name = '';
        this.original_name = '';
        this.popularity = 0;
        this.profile_path = '';
    }
  }