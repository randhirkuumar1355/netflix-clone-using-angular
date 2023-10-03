import { Cast } from "./cast";
import { Crew } from "./crew";

export class Credits {
    public id: number;
    public cast: Cast[];
    public crew: Crew[];
    constructor() {
        this.id = 0;
        this.cast = [];
        this.crew = [];
    }
  }