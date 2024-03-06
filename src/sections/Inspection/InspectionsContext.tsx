/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useEffect, useState } from "react";
import { Inspection } from "../../modules/inspection/domain/Inspection";
import { InspectionRepository } from "../../modules/inspection/domain/InspectionRepository";
import { createInspection } from "../../modules/inspection/application/createInspection";
import { deleteInspection } from "../../modules/inspection/application/deleteInspection";
import { getAllInspections } from "../../modules/inspection/application/getAllInspections";
import { getInspectionById } from "../../modules/inspection/application/getInspectionById";
import { updateInspection } from "../../modules/inspection/application/updateInspection";

export interface ContextState {
	inspections: Inspection[];
	createInspection: (inspection: Inspection) => Promise<void>;
	getAllInspections: () => Promise<Inspection[]>;
	getInspectionById: (inspectionId: string) => Promise<Inspection | null>;
	deleteInspection: (inspectionId: string) => Promise<void>;
	updateInspection: (inspectionId: string, updatedInspection: Inspection) => Promise<void>;
}

export const InspectionsContext = React.createContext({} as ContextState);

export const InspectionsContextProvider = ({
	children,
	inspectionRepository,
}: React.PropsWithChildren<{ inspectionRepository: InspectionRepository }>) => {
	const [inspections, setInspections] = useState<Inspection[]>([]);

	const getInspections = async () => {
		const allInspections = await getAllInspections(inspectionRepository);
		setInspections(allInspections);
		return allInspections;
	};

	useEffect(() => {
		getInspections();
	}, []);

	const createInspectionHandler = async (inspection: Inspection) => {
		await createInspection(inspectionRepository, inspection);
		getInspections();
	};

	const deleteInspectionHandler = async (inspectionId: string) => {
		await deleteInspection(inspectionRepository, inspectionId);
		getInspections();
	};

	const updateInspectionHandler = async (inspectionId: string, updatedInspection: Inspection) => {
		await updateInspection(inspectionRepository, inspectionId, updatedInspection);
		getInspections();
	};

	return (
		<InspectionsContext.Provider
			value={{
				inspections,
				createInspection: createInspectionHandler,
				getAllInspections: getInspections,
				getInspectionById: getInspectionById.bind(null, inspectionRepository),
				deleteInspection: deleteInspectionHandler,
				updateInspection: updateInspectionHandler,
			}}
		>
			{children}
		</InspectionsContext.Provider>
	);
};

export const useInspectionsContext = () => useContext(InspectionsContext);