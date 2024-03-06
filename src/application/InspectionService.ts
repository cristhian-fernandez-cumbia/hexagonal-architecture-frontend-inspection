import { Inspection } from "../domain/Inspection";
import { LocalStorageService } from "./LocalStorageService";

export class InspectionService {
    private localStorageService: LocalStorageService;

    constructor() {
        this.localStorageService = new LocalStorageService();
    }

    createInspection(inspection: Inspection): void {
        if (!this.isInspectionValid(inspection)) {
            throw new Error("Invalid inspection data");
        }
        this.localStorageService.saveInspection(inspection);
    }

    getInspections(): Inspection[] {
        return this.localStorageService.getInspections();
    }

    updateInspection(inspectionId: string, updatedInspection: Inspection): void {
        const inspections = this.getInspections();
        const index = inspections.findIndex(insp => insp.id === inspectionId);
        if (index !== -1) {
            inspections[index] = updatedInspection;
            this.localStorageService.saveInspections(inspections);
        } else {
            throw new Error("Inspection not found");
        }
    }

    deleteInspection(inspectionId: string): void {
        const inspections = this.getInspections().filter(insp => insp.id !== inspectionId);
        this.localStorageService.saveInspections(inspections);
    }

    private isInspectionValid(inspection: Inspection): boolean {
        return !!inspection.inspector && !!inspection.collaborators && !!inspection.client && !!inspection.work && !!inspection.date && !!inspection.items.length;
    }
}
