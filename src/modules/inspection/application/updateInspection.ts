import { Inspection } from "../domain/Inspection";
import { InspectionRepository } from "../domain/InspectionRepository";

export async function updateInspection(
    inspectionRepository: InspectionRepository,
    inspectionId: string,
    updatedInspection: Inspection
): Promise<void> {
    await inspectionRepository.updateInspection(inspectionId, updatedInspection);
}
