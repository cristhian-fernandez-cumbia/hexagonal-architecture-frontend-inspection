import { Inspection } from "../domain/Inspection";
import { InspectionRepository } from "../domain/InspectionRepository";

export async function createInspection(
    inspectionRepository: InspectionRepository,
    inspection: Inspection
): Promise<void> {
    await inspectionRepository.saveInspection(inspection);
}