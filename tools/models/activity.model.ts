import { auditModel } from "./audit.model";
import { activityTypeModel } from "./activity-type.model";

export class activityModel{
    id:string;
    name:string;
    audit:auditModel;
    type:activityTypeModel;
}