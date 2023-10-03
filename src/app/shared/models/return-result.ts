import { ReturnStatus } from "./return-status";

export class ReturnResult {
    public status: ReturnStatus;
    public results?: any;
    constructor(){
        this.status = ReturnStatus.success;
        this.results = [];
    }
}
