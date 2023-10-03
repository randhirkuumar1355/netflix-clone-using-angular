export class VideosResults {
    public id: string;
    public iso_639_1: string;
    public iso_3166_1: string;
    public key: string;
    public name: string;
    public official: boolean;
    public published_at: Date;
    public site: string;
    public size: number;
    public type: string;
    constructor() {
        this.id = ''
        this.iso_639_1 = ''
        this.iso_3166_1 = ''
        this.key = ''
        this.name = ''
        this.official = false;
        this.published_at = new Date();
        this.site = '';
        this.size = 0;
        this.type = '';
    }
  }