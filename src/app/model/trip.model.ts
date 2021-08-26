export class Trip {
    id: number;
    toCity: string;
    toCountry: string;
    fromCity: string;
    fromCountry: string;
    fromAirport: string;
    toAirport: string;
    hotel: string;
    departureDate: string;
    numberOfDays: number;
    boardBasis: string; 
    priceAdult: number;
    priceChild: number;
    numberOfBedsAdult: number;
    numberOfBedsChild: number;
    picture?: string = 'https://picsum.photos/500/200';
}
