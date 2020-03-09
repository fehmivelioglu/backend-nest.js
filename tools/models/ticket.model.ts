import { ticketTypeModel } from "./ticket-type.model";
import { userModel } from "./user.model";
import { auditModel } from "./audit.model";
import { activityModel } from "./activity.model";
import { inventoryModel } from "./inventory.model";

export class ticketModel{
    id:string;
    name:string;
    description:string;
    type:ticketTypeModel;
    responsible:userModel;
    audit:auditModel;
    activities:activityModel[];
    inventories:inventoryModel[];

}