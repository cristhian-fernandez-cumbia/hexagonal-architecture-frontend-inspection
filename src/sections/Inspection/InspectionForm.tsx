/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormStatus, useInspectionForm } from './useInspectionForm';
import { Inspection } from '../../modules/inspection/domain/Inspection';
import styles from './../../styles/inspectionForm.module.css';

interface InspectionFormProps {
    inspection?: Inspection;
}

export function InspectionForm({ inspection }: InspectionFormProps) {
    const { formStatus, submitCreateForm, submitUpdateForm} = useInspectionForm();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const buttonText = inspection ? 'Update inspection' : 'Create inspection';
    const [formData, setFormData] = useState<Inspection>({
        id: uuidv4(),
        inspector: {
            id: uuidv4(),
            documentType: '',
            documentNumber: '',
            lastName: '',
            firstName: '',
            phoneNumber: '',
            email: ''
        },
        collaborator: {
            id: uuidv4(),
            documentType: '',
            documentNumber: '',
            lastName: '',
            firstName: '',
            phoneNumber: '',
            email: ''
        },
        country: '',
        address: '',
        client: '',
        work: '',
        date: '',
        items: [
            { id: uuidv4(), question: '¿Se hizo la inspección correcta el día lunes?', answer: '' },
            { id: uuidv4(), question: '¿Se hizo la inspección correcta el día martes?', answer: '' },
            { id: uuidv4(), question: '¿Se hizo la inspección correcta el día miércoles?', answer: '' },
            { id: uuidv4(), question: '¿Se hizo la inspección correcta el día jueves?', answer: '' },
            { id: uuidv4(), question: '¿Se hizo la inspección correcta el día viernes?', answer: '' },
            { id: uuidv4(), question: '¿Se hizo la inspección correcta el día sábado?', answer: '' },
            { id: uuidv4(), question: '¿Se hizo la inspección correcta el día domingo?', answer: '' },
            { id: uuidv4(), question: '¿Se hizo la inspección correcta en enero?', answer: '' },
            { id: uuidv4(), question: '¿Se hizo la inspección correcta en febrero?', answer: '' },
            { id: uuidv4(), question: '¿Se hizo la inspección correcta en marzo?', answer: '' }
        ],
        result:'---'
    });

    useEffect(() => {
        if (inspection) {
            setFormData(inspection);
        }
    }, [inspection]);

    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormComplete()) {  
            calculateResult();      
        }
    };

    const handleInputChange = (key: string, value: string) => {
        const [field, subField] = key.split('.');
        if (subField) {
            setFormData((prevData: any) => ({
                ...prevData,
                [field]: {
                    ...prevData[field], 
                    [subField]: value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [field]: value,
            }));
        }
    };

    const handleItemAnswerChange = (itemId: string, answer: "" | "SI" | "NO") => {
        setFormData((prevData) => ({
            ...prevData,
            items: prevData.items.map((item) =>
                item.id === itemId ? { ...item, answer } : item
            ),
        }));
    };

    const isFormComplete = () => {
        for (const key in formData) {
            if (typeof formData[key as keyof Inspection] === 'object') {
                const subFields: any = formData[key as keyof Inspection];
                if (Array.isArray(subFields)) {
                    for (const item of subFields) {
                        if (!item.answer || (item.answer !== 'SI' && item.answer !== 'NO')) {
                            setErrorMessage('Formulario incompleto: Selecciona todas las opciones.');
                            return false;
                        }
                    }
                } else {
                    for (const subKey in subFields) {
                        if (!subFields[subKey as keyof typeof subFields]) {
                            setErrorMessage('Formulario incompleto: Llenar el campo que falta.');
                            return false;
                        }
                    }
                }
            } else {
                if (!formData[key as keyof Inspection]) {
                    setErrorMessage('Formulario incompleto: Llenar el campo que falta.');
                    return false;
                }
            }
        }
        setErrorMessage('');
        return true;
    };
    
    const calculateResult = () => {
        const noCount = formData.items.filter(item => item.answer === 'NO').length;
        const result = noCount > 3 ? 'OBSERVADO' : 'CORRECTA';
        setFormData(prevData => {
            return {
                ...prevData,
                result
            }
        }); 
        submitCreateForm({ ...formData, result });

        if (inspection) {
            submitUpdateForm({ ...formData, result }, formData.id);
        } else {
            submitCreateForm({ ...formData, result });
        }
    };

    return (
        <section id="inspection-form">
            {formStatus === FormStatus.Loading && <Spinner />}
            {formStatus === FormStatus.Success && <SuccessNotification result={formData.result} />}
            {formStatus === FormStatus.Error && <ErrorNotification />}
            {formStatus === FormStatus.Initial && (
                <form onSubmit={handleSubmit}>
                    <h2>🔍 Create new inspection</h2>
                    <div>
                        <h2>Colaborador</h2>
                        <div>
                            <label htmlFor="collaboratorDocumentType">Tipo Documento Identidad</label>
                            <input
                                id="collaboratorDocumentType"
                                type="text"
                                value={formData.collaborator.documentType}
                                onChange={(e) => handleInputChange('collaborator.documentType', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="collaboratorDocumentNumber">Número Documento Identidad</label>
                            <input
                                id="collaboratorDocumentNumber"
                                type="text"
                                value={formData.collaborator.documentNumber}
                                onChange={(e) => handleInputChange('collaborator.documentNumber', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="collaboratorLastName">Apellidos</label>
                            <input
                                id="collaboratorLastName"
                                type="text"
                                value={formData.collaborator.lastName}
                                onChange={(e) => handleInputChange('collaborator.lastName', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="collaboratorFirstName">Nombres</label>
                            <input
                                id="collaboratorFirstName"
                                type="text"
                                value={formData.collaborator.firstName}
                                onChange={(e) => handleInputChange('collaborator.firstName', e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="collaboratorPhoneNumber">Telefono Celular</label>
                            <input
                                id="collaboratorPhoneNumber"
                                type="text"
                                value={formData.collaborator.phoneNumber}
                                onChange={(e) => handleInputChange('collaborator.phoneNumber', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="collaboratorEmail">Email</label>
                            <input
                                id="collaboratorEmail"
                                type="text"
                                value={formData.collaborator.email}
                                onChange={(e) => handleInputChange('collaborator.email', e.target.value)}
                            />
                        </div>
                        <h2>Inspector</h2>
                        <div>
                            <label htmlFor="inspectorDocumentType">Tipo de documento Identidad</label>
                            <input
                                id="inspectorDocumentType"
                                type="text"
                                value={formData.inspector.documentType}
                                onChange={(e) => handleInputChange('inspector.documentType', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="inspectorDocumentNumber">Número Documento Identidad</label>
                            <input
                                id="inspectorDocumentNumber"
                                type="text"
                                value={formData.inspector.documentNumber}
                                onChange={(e) => handleInputChange('inspector.documentNumber', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="inspectorLastName">Apellidos</label>
                            <input
                                id="inspectorLastName"
                                type="text"
                                value={formData.inspector.lastName}
                                onChange={(e) => handleInputChange('inspector.lastName', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="inspectorFirstName">Nombres</label>
                            <input
                                id="inspectorFirstName"
                                type="text"
                                value={formData.inspector.firstName}
                                onChange={(e) => handleInputChange('inspector.firstName', e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="inspectorPhoneNumber">Telefono Celular</label>
                            <input
                                id="inspectorPhoneNumber"
                                type="text"
                                value={formData.inspector.phoneNumber}
                                onChange={(e) => handleInputChange('inspector.phoneNumber', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="inspectorEmail">Email</label>
                            <input
                                id="inspectorEmail"
                                type="text"
                                value={formData.inspector.email}
                                onChange={(e) => handleInputChange('inspector.email', e.target.value)}
                            />
                        </div>

                        <h2>Otras preguntas</h2>
                        <div>
                            <label htmlFor="country">País</label>
                            <input
                                id="country"
                                type="text"
                                value={formData.country}
                                onChange={(e) => handleInputChange('country', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Dirección</label>
                            <input
                                id="address"
                                type="text"
                                value={formData.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="client">Cliente</label>
                            <input
                                id="client"
                                type="text"
                                value={formData.client}
                                onChange={(e) => handleInputChange('client', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="work">Obra</label>
                            <input
                                id="work"
                                type="text"
                                value={formData.work}
                                onChange={(e) => handleInputChange('work', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="date">Fecha</label>
                            <input
                                id="date"
                                type="text"
                                value={formData.date}
                                onChange={(e) => handleInputChange('date', e.target.value)}
                            />
                        </div>

                        <h2>Items</h2>
                        {formData.items.map((item) => (
                            <div key={item.id}>
                                <p>{item.question}</p>
                                <button
                                    type="button"
                                    onClick={() => handleItemAnswerChange(item.id, item.answer === 'SI' ? '' : 'SI')}
                                    className={item.answer === 'SI' ? styles.selected : ''}
                                >
                                    SI
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleItemAnswerChange(item.id, item.answer === 'NO' ? '' : 'NO')}
                                    className={item.answer === 'NO' ? styles.selected : ''}
                                >
                                    NO
                                </button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3>Resultado de Inspección: <span>{formData.result}</span></h3>
                    </div>
                    <button type="submit">{buttonText}</button>
                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </form>
            )}
        </section>
    );
}

function SuccessNotification({ result }: { result: string }) {
    return (
        <section>
            <h2>🚀 Inspección creada exitosamente</h2>
            <div>
                <h3>Resultado de Inspección: <span>{result}</span></h3>
            </div>
        </section>
    );
}


function ErrorNotification() {
    return (
        <section role="alert">
            <h2>🌋 Hubo un error en el formulario</h2>
        </section>
    );
}

function Spinner() {
    return <div>Loading...</div>;
}