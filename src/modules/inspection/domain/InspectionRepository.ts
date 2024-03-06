import { Inspection } from "./Inspection";

export interface InspectionRepository {
    saveInspection: (inspection: Inspection) => Promise<void>;
    getInspectionById: (id: string) => Promise<Inspection | null>;
    getAllInspections:()=> Promise<Inspection[]>;
    updateInspection: (id: string, updatedInspection: Inspection) => Promise<void>;
    deleteInspection: (id: string)=> Promise<void>;
}