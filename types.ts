// types.ts
export interface Card {
    id: string;
    brand: string,
    last_digits: string,
    expiration_month: number,
    expiration_year: number,
    country: string,
    fingerprint: string,
    name: string,
}
