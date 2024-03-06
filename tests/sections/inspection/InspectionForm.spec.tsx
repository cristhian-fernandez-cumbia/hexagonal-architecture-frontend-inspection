import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { InspectionForm } from './../../../src/sections/Inspection/InspectionForm';
import { useInspectionForm } from './../../../src/sections/Inspection/useInspectionForm';
import { Inspection } from "../../../src/modules/inspection/domain/Inspection";

jest.mock('./useInspectionForm', () => ({
    useInspectionForm: jest.fn(() => ({
        formStatus: 'Initial',
        submitCreateForm: jest.fn(),
        submitUpdateForm: jest.fn(),
    })),
}));

describe('InspectionForm component', () => {
    const mockedUseInspectionForm = useInspectionForm as jest.MockedFunction<typeof useInspectionForm>;

    beforeEach(() => {
        mockedUseInspectionForm.mockClear();
    });

    test('renders component properly', () => {
        render(<InspectionForm />);
        expect(screen.getByText(/Crear Formulario de Inspección/i)).toBeInTheDocument();
    });

    test('renders component with inspection data', () => {
        const inspectionData = {
            id: '123',
            inspector: {
                id: '456',
                documentType: 'DNI',
                documentNumber: '12345678',
                lastName: 'Doe',
                firstName: 'John',
                phoneNumber: '123456789',
                email: 'john.doe@example.com',
            },
            collaborator: {
                id: '789',
                documentType: 'Pasaporte',
                documentNumber: 'ABC123',
                lastName: 'Smith',
                firstName: 'Jane',
                phoneNumber: '987654321',
                email: 'jane.smith@example.com',
            },
            country: 'USA',
            address: '123 Main St',
            client: 'ABC Corp',
            work: 'Building Construction',
            date: '2024-03-01T12:00:00.000Z',
            items: [
                { id: 'item1', question: 'Question 1', answer: 'SI' },
                { id: 'item2', question: 'Question 2', answer: 'SI' },
                { id: 'item2', question: 'Question 2', answer: 'SI' },
                { id: 'item2', question: 'Question 2', answer: 'SI' },
                { id: 'item2', question: 'Question 2', answer: 'NO' },
                { id: 'item2', question: 'Question 2', answer: 'SI' },
                { id: 'item2', question: 'Question 2', answer: 'SI' },
                { id: 'item2', question: 'Question 2', answer: 'SI' },
                { id: 'item2', question: 'Question 2', answer: 'SI' },
                { id: 'item2', question: 'Question 2', answer: 'NO' }
            ],
            result: 'CORRECTA',
        };

        render(<InspectionForm inspection={inspectionData as Inspection} />);


        expect(screen.getByLabelText(/Tipo de documento/i)).toHaveValue(inspectionData.inspector.documentType);
        expect(screen.getByLabelText(/Número Documento/i)).toHaveValue(inspectionData.inspector.documentNumber);
        expect(screen.getByLabelText(/Apellidos/i)).toHaveValue(inspectionData.inspector.lastName);
        expect(screen.getByLabelText(/Nombres/i)).toHaveValue(inspectionData.inspector.firstName);
        expect(screen.getByLabelText(/Telefono Celular/i)).toHaveValue(inspectionData.inspector.phoneNumber);
        expect(screen.getByLabelText(/Email/i)).toHaveValue(inspectionData.inspector.email);

        expect(screen.getByLabelText(/País/i)).toHaveValue(inspectionData.country);
        expect(screen.getByLabelText(/Dirección/i)).toHaveValue(inspectionData.address);
        expect(screen.getByLabelText(/Cliente/i)).toHaveValue(inspectionData.client);
        expect(screen.getByLabelText(/Obra/i)).toHaveValue(inspectionData.work);
        expect(screen.getByLabelText(/Fecha/i)).toHaveValue('01/03/2024');

        expect(screen.getByText(/Question 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Question 2/i)).toBeInTheDocument();
    });

    test('submits form when data is complete', async () => {
        render(<InspectionForm />);

        const submitButton = screen.getByRole('button', { name: /Crear Inspección/i });
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(mockedUseInspectionForm.mock.calls.length).toBe(1);
        });
    });

    test('displays error message if form is incomplete', async () => {
        render(<InspectionForm />);

        const submitButton = screen.getByRole('button', { name: /Crear Inspección/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/Formulario incompleto:/i)).toBeInTheDocument();
        });
    });
});
