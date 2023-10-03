import { VideosResults } from "./videos-result/videos-results";

export class Videos {
    public id: number;
    public results: VideosResults;
    constructor() {
        this.id = 0;
        this.results = new VideosResults();
    }
  }