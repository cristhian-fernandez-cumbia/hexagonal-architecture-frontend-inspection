import { Inspector } from "./Inspector";
import { Collaborator } from "./Collaborator";
import { InspectionItem } from "./InspectionItem";

export interface Inspection {
    id: string;
    inspector: Inspector;
    collaborator: Collaborator;
    country: string;
    address: string;
    client: string;
    work: string;
    date: string;
    items: InspectionItem[];
    result: string;
}