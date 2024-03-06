/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inspection } from "../../../../src/modules/inspection/domain/Inspection";
import { InspectionItem } from "../../../../src/modules/inspection/domain/InspectionItem";

import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

const randomArrayElement = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
};

const InspectionFactory = Factory.define<Inspection>(() => ({
    id: faker.datatype.uuid(),
    inspector: {
        id: faker.datatype.uuid(),
        documentType: randomArrayElement(["DNI", "Pasaporte", "Carné de conducir"]),
        documentNumber: faker.random.alphaNumeric(8),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email()
    },
    collaborator: {
        id: faker.datatype.uuid(),
        documentType: randomArrayElement(["DNI", "Pasaporte", "Carné de conducir"]),
        documentNumber: faker.random.alphaNumeric(8),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email()
    },
    country: faker.address.country(),
    address: faker.address.streetAddress(),
    client: faker.company.name(),
    work: faker.commerce.productName(),
    date: faker.date.future().toISOString(),
    items: [
        { id: faker.datatype.uuid(), question: faker.lorem.sentence(), answer: randomArrayElement(["SI", "NO"]) },
        { id: faker.datatype.uuid(), question: faker.lorem.sentence(), answer: randomArrayElement(["SI", "NO"]) },
        { id: faker.datatype.uuid(), question: faker.lorem.sentence(), answer: randomArrayElement(["SI", "NO"]) },
        { id: faker.datatype.uuid(), question: faker.lorem.sentence(), answer: randomArrayElement(["SI", "NO"]) },
        { id: faker.datatype.uuid(), question: faker.lorem.sentence(), answer: randomArrayElement(["SI", "NO"]) },
        { id: faker.datatype.uuid(), question: faker.lorem.sentence(), answer: randomArrayElement(["SI", "NO"]) },
        { id: faker.datatype.uuid(), question: faker.lorem.sentence(), answer: randomArrayElement(["SI", "NO"]) },
        { id: faker.datatype.uuid(), question: faker.lorem.sentence(), answer: randomArrayElement(["SI", "NO"]) },
        { id: faker.datatype.uuid(), question: faker.lorem.sentence(), answer: randomArrayElement(["SI", "NO"]) },
        { id: faker.datatype.uuid(), question: faker.lorem.sentence(), answer: randomArrayElement(["SI", "NO"]) },
    ],
    result: randomArrayElement(["OBSERVADO", "CORRECTA"])
}));

export const InspectionMother = {
    create: (params?: Partial<Inspection>): Inspection => {
      return InspectionFactory.build(params);
    },
    createList: (length = 5): Inspection[] => {
      return InspectionFactory.buildList(length);
    },
    isInspection: (object: any): object is Inspection => {
      return (
        typeof object === "object" &&
        object !== null &&
        "id" in object &&
        typeof object.id === "string" &&
        "inspector" in object &&
        typeof object.inspector === "object" &&
        "collaborator" in object &&
        typeof object.collaborator === "object" &&
        "country" in object &&
        typeof object.country === "string" &&
        "address" in object &&
        typeof object.address === "string" &&
        "client" in object &&
        typeof object.client === "string" &&
        "work" in object &&
        typeof object.work === "string" &&
        "date" in object &&
        typeof object.date === "string" &&
        "items" in object &&
        Array.isArray(object.items) &&
        object.items.every((item: any) => isInspectionItem(item)) &&
        "result" in object &&
        typeof object.result === "string"
      );
    },
  };
  
  // Función auxiliar para validar InspectionItem
  const isInspectionItem = (item: any): item is InspectionItem => {
    return (
      typeof item === "object" &&
      Object !== null &&
      "id" in item &&
      typeof item.id === "string" &&
      "question" in item &&
      typeof item.question === "string" &&
      "answer" in item &&
      (item.answer === "SI" || item.answer === "NO" || item.answer === "")
    );
  };