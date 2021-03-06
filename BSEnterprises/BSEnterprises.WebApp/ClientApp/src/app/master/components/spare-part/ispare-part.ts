export interface ISparePart {
    id:number;
    name: string;
    price?: number;
    rateOfTax?: number;
    hsnSac: string;
    productId: number;
    stockInHand : number;
    openingDate : Date;
    model : string;
    code : string;
}
