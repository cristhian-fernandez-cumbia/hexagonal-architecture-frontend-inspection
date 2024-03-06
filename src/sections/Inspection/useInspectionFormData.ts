import { useState } from "react";
import { Inspection } from "../../modules/inspection/domain/Inspection";

export const useInspectionFormData = (
  initialState: Inspection
): {
  formData: Inspection;
  updateForm: (value: Partial<Inspection>) => void;
  resetForm: () => void;
} => {
  const [formData, setFormData] = useState<Inspection>(initialState);

  const updateForm = (value: Partial<Inspection>) => {
    setFormData((oldState) => {
      return { ...oldState, ...value };
    });
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return {
    formData,
    updateForm,
    resetForm,
  };
};