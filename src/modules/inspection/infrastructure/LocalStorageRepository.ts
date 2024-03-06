import { Inspection } from "../domain/Inspection";
import { InspectionRepository } from "../domain/InspectionRepository";


export function createLocalStorageInspectionRepository(): InspectionRepository {
    return {
        saveInspection,
        getInspectionById,
        getAllInspections,
        updateInspection,
        deleteInspection
    };
}

async function saveInspection(inspection: Inspection): Promise<void> {
    const inspections = getAllInspectionsFromLocalStorage();

    inspections.set(inspection.id, inspection);
    localStorage.setItem("inspections", JSON.stringify(Array.from(inspections.entries())));

    await Promise.resolve();
}

async function getInspectionById(id: string): Promise<Inspection | null> {
    const inspections = getAllInspectionsFromLocalStorage();
    const inspection = inspections.get(id);

    if (!inspection) {
        return Promise.resolve(null);
    }

    return Promise.resolve(inspection);
}

async function getAllInspections(): Promise<Inspection[]> {
    const inspections = getAllInspectionsFromLocalStorage();

    return Promise.resolve(Array.from(inspections.values()));
}

async function updateInspection(id: string, updatedInspection: Inspection): Promise<void> {
    const inspections = getAllInspectionsFromLocalStorage();
    
    if (inspections.has(id)) {
        inspections.set(id, updatedInspection);
        localStorage.setItem("inspections", JSON.stringify(Array.from(inspections.entries())));
    } else {
        throw new Error("Inspection not found");
    }

    await Promise.resolve();
}

async function deleteInspection(id: string): Promise<void> {
    const inspections = getAllInspectionsFromLocalStorage();
    
    if (inspections.has(id)) {
        inspections.delete(id);
        localStorage.setItem("inspections", JSON.stringify(Array.from(inspections.entries())));
    } else {
        throw new Error("Inspection not found");
    }

    await Promise.resolve();
}

function getAllInspectionsFromLocalStorage(): Map<string, Inspection> {
    const inspections = localStorage.getItem("inspections");

    if (inspections === null) {
        return new Map();
    }

    const map = new Map(JSON.parse(inspections) as Iterable<[string, Inspection]>);

    return map;
}
