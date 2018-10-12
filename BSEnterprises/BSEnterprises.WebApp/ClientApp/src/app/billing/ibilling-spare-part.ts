export interface IBillingSparePart {
id: number;
date: Date;
customerName: string;
customerAddress: string;
customerGstin: string;
customerContact: number;
placeOfSupply: string;
totalInvoiceValue: number;
billingSpareItems: IBillingSpareItems[]

}

export interface IBillingSpareItems{
id: number;
productId: number;
quantity: number;
discount: number;
rate: number;
hsnCode: number;
igstAmount: number;
cgstAmount: number;
sgstAmount: number;
total: number;

}

 