export interface InspectionItem {
    pregunta: string;
    respuesta: 'SI' | 'NO';
}

export interface PersonalData {
  tipoDocumentoIdentidad: string;
  numeroDocumentoIdentidad: string;
  apellidos: string;
  nombres: string;
  telefonoCelular: string;
  email: string;
}

export interface InspectorData {
  tipoDocumentoIdentidad: string;
  numeroDocumentoIdentidad: string;
  apellidos: string;
  nombres: string;
  telefonoCelular: string;
  email: string;
}

export interface InspectionFormFields {
  personal: PersonalData;
  inspector: InspectorData;
  pais: string;
  direccion: string;
  cliente: string;
  obra: string;
  fecha: string;
  items: InspectionItem[];
}
  