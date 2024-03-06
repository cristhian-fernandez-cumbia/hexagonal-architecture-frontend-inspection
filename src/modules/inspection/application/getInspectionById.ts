import { Inspection } from "../domain/Inspection";
import { InspectionRepository } from "../domain/InspectionRepository";

export async function getInspectionById(
    inspectionRepository: InspectionRepository,
    inspectionId: string
): Promise<Inspection | null> {
    return inspectionRepository.getInspectionById(inspectionId);
}
