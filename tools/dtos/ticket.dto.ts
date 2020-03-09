import { ticketTypeModel } from "tools/models/ticket-type.model";
import { userModel } from "tools/models/user.model";
import { auditModel } from "tools/models/audit.model";
import { activityModel } from "tools/models/activity.model";
import { inventoryModel } from "tools/models/inventory.model";

export class TicketCreateDto {
    // @IsNotEmpty()
    // @Length(2, 30)
    name: string;
    // @IsNotEmpty()
    // @Length(2, 120)
    description: string;
    // @IsNotEmpty()
    type: ticketTypeModel;
    // @IsNotEmpty()
    responsible: userModel;
    audit: auditModel;
    activities: activityModel[];
    inventories: inventoryModel[];
  }