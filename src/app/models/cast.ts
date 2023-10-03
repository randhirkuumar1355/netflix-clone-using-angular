export class Cast {
    public id: number;
    public cast_id: number;
    public character: string;
    public adult: boolean;
    public credit_id: string;
    public gender: number;
    public known_for_department: string;
    public name: string;
    public order: number;
    public original_name: string;
    public popularity: number;
    public profile_path: string;
    constructor() {
        this.id = 0;
        this.cast_id = 0;
        this.character = '';
        this.adult = false;
        this.credit_id = '';
        this.gender = 0;
        this.known_for_department = '';
        this.name = '';
        this.order = 0;
        this.original_name = '';
        this.popularity = 0;
        this.profile_path = '';
    }
  }