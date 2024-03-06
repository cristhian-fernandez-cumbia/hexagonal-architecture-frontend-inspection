import { useState } from "react";
import { useInspectionsContext } from "./InspectionsContext";
import { Inspection } from "../../modules/inspection/domain/Inspection";

export const enum FormStatus {
	Loading,
	Success,
	Error,
	Initial,
}

export function useInspectionForm(): {
	formStatus: FormStatus;
	submitCreateForm: (formData: Inspection) => void;
	submitUpdateForm: (formData: Inspection, inspectionId: string) => void;
	resetFormStatus: () => void;
} {
	const [formStatus, setFormStatus] = useState(FormStatus.Initial);
	const { createInspection, updateInspection } = useInspectionsContext();

	function submitCreateForm(formData: Inspection) {
		setFormStatus(FormStatus.Loading);

		try {
			createInspection(formData)
				.then(() => {
					setFormStatus(FormStatus.Success);
				})
				.catch(() => {
					throw new Error("Could not create inspection");
				});
		} catch (e) {
			setFormStatus(FormStatus.Error);
		}
	}

	function submitUpdateForm(formData: Inspection, inspectionId: string) {
		setFormStatus(FormStatus.Loading);

		try {
			updateInspection(inspectionId, formData)
				.then(() => {
					setFormStatus(FormStatus.Success);
				})
				.catch(() => {
					throw new Error("Could not create inspection");
				});
		} catch (e) {
			setFormStatus(FormStatus.Error);
		}
	}

	function resetFormStatus() {
		setFormStatus(FormStatus.Initial);
	}

	return {
		formStatus,
		submitCreateForm,
		submitUpdateForm,
		resetFormStatus,
	};
}