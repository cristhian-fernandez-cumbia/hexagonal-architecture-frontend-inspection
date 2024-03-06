import { Inspection } from "../domain/Inspection";

export class LocalStorageService {
    private readonly INSPECTIONS_KEY = "inspections";

    saveInspection(inspection: Inspection): void {
        const inspections: Inspection[] = this.getInspections();
        inspections.push(inspection);
        localStorage.setItem(this.INSPECTIONS_KEY, JSON.stringify(inspections));
    }

    saveInspections(inspections: Inspection[]): void {
        localStorage.setItem(this.INSPECTIONS_KEY, JSON.stringify(inspections));
    }

    getInspections(): Inspection[] {
        const inspectionsJSON = localStorage.getItem(this.INSPECTIONS_KEY);
        return inspectionsJSON ? JSON.parse(inspectionsJSON) : [];
    }
}

