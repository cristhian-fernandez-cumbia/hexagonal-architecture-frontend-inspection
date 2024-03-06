import { InspectionRepository } from "../domain/InspectionRepository";

export async function deleteInspection(
    inspectionRepository: InspectionRepository,
    inspectionId: string
): Promise<void> {
    await inspectionRepository.deleteInspection(inspectionId);
}
