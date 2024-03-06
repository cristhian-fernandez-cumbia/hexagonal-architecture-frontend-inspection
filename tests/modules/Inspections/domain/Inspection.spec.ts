import { InspectionItem } from "../../../../src/modules/inspection/domain/InspectionItem";
import { InspectionMother } from "./Inspection";

describe("Inspection", () => {
  test("should create an Inspection instance", () => {
    const inspection = InspectionMother.create();

    expect(inspection.id).toBeDefined();
    expect(inspection.inspector).toBeDefined();
    expect(inspection.collaborator).toBeDefined();
    expect(inspection.country).toBeDefined();
    expect(inspection.address).toBeDefined();
    expect(inspection.client).toBeDefined();
    expect(inspection.work).toBeDefined();
    expect(inspection.date).toBeDefined();
    expect(inspection.items).toBeDefined();
    expect(inspection.result).toBeDefined();

    expect(inspection.inspector).toHaveProperty("id");
    expect(inspection.inspector).toHaveProperty("documentType");
    expect(inspection.inspector).toHaveProperty("documentNumber");
    expect(inspection.inspector).toHaveProperty("lastName");
    expect(inspection.inspector).toHaveProperty("firstName");
    expect(inspection.inspector).toHaveProperty("phoneNumber");
    expect(inspection.inspector).toHaveProperty("email");

    expect(inspection.collaborator).toHaveProperty("id");
    expect(inspection.collaborator).toHaveProperty("documentType");
    expect(inspection.collaborator).toHaveProperty("documentNumber");
    expect(inspection.collaborator).toHaveProperty("lastName");
    expect(inspection.collaborator).toHaveProperty("firstName");
    expect(inspection.collaborator).toHaveProperty("phoneNumber");
    expect(inspection.collaborator).toHaveProperty("email");

    expect(inspection.items.length).toBeGreaterThan(0);
    inspection.items.forEach((item: InspectionItem) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("question");
      expect(item).toHaveProperty("answer");
    });
  });

  test("should create a list of inspections", () => {
    const inspections = InspectionMother.createList(3);

    expect(inspections.length).toBe(3);
    inspections.forEach((inspection) => expect(InspectionMother.isInspection(inspection)).toBe(true));
  });
});