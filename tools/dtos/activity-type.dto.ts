import { auditDto } from "./audit.dto";
export class activityTypeDto{
    // @IsNotEmpty()
    // @length(2,30)
    name:string;
    audit:auditDto;
}