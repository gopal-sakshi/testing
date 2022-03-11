export enum TNMT {
    Leo,         //Leonardo
    Michael,     //Michaelangelo,
    Dona,        // Donatello,
    Raphael
}

export type PizzaPreferences = Record<TNMT, string>;

// Numeric enums store string values as numbers
export enum SouthStates {
	Kerala, 
    TamilNadu,
    Karnataka,
    Andhra, 
    Telangana
}


// String enums... String enums have better readability than numeric enums
export enum Countries {
    ESP = 'SPAIN',
    POR = 'PORTUGAL',
    ENG = 'ENGLAND',
    GER = 'GERMANY',
    ITA = 'ITALY'
}

export enum Directions {
    NORTH = 'N',
    SOUTH = 'S',
    WEST = 'W',
    EAST = 'E'
}

export interface Dictionary1 {
    name: string,
    age?: number,
    phone: string | number,
    city: string,
    country?: string
}