export interface UniqueIdField {
    name: string;
    isSystemMaintained: boolean;
}

export interface GeometryProperties {
    shapeAreaFieldName: string;
    shapeLengthFieldName: string;
    units: string;
}

export interface SpatialReference {
    wkid: number;
    latestWkid: number;
}

export interface Field {
    name: string;
    type: string;
    alias: string;
    sqlType: string;
    domain?: any;
    defaultValue?: any;
    length?: number;
}

export interface Attributes {
    OBJECTID: number;
    DPTO_CCDGO: string;
    MPIO_CCDGO: string;
    MPIO_CNMBR: string;
    MPIO_CCNCT: string;
    DPTO_CNMBR: string;
    NOMBRE_MPIO: string;
    TOTAL_UNIDADES_Personas_en_gene: number;
    Area_km2: number;
    Coronavirus: string;
    GlobalID: string;
    Total_Confirmados: number;
    Total_Existentes: number;
    Total_Muertos: number;
    Total_Recuperados: number;
    Shape__Area: number;
    Shape__Length: number;
    A_CASA: number;
    A_HOSPITAL: number;
    A_HOSPITAL_UCI: number;
    ETAREO_F: number;
    ETAREO_M: number;
    TOTAL_UNIDADES_PERSONAS_PROY_2020: number;
}

export interface Geometry {
    rings: number[][][];
}

export interface Feature {
    attributes: Attributes;
    geometry: Geometry;
}

export interface GeneralResponse {
    objectIdFieldName: string;
    uniqueIdField: UniqueIdField;
    globalIdFieldName: string;
    geometryProperties: GeometryProperties;
    geometryType: string;
    spatialReference: SpatialReference;
    fields: Field[];
    features: Feature[];
}