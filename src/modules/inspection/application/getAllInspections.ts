import { Inspection } from "../domain/Inspection";
import { InspectionRepository } from "../domain/InspectionRepository";

export async function getAllInspections(
    inspectionRepository: InspectionRepository
): Promise<Inspection[]> {
    return inspectionRepository.getAllInspections();
}
