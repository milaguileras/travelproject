import { Group } from "./group.model";
import { Member } from "./member.model";

export class Destination {
    OrganizationName!: string;
    OrganizationId!: number;
    Description!: string;
    Image!: string;
    ImageAlt!:String;
    Groups?: Group[];
}
