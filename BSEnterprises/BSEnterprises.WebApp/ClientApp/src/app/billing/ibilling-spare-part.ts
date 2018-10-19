export interface IBillingSparePart {
id: number;
date: Date;
customerName: string;
customerAddress: string;
customerGstin: string;
customerContact: number;
placeOfSupply: string;
totalInvoiceValue: number;

billingSparePartItems: IBillingSpareItems[]

}

export interface IBillingSpareItems{

productId: number;
quantity: number;
discount: number;
rate: number;
hsnCode: number;
igstAmount: number;
taxableValue: number;
cgstAmount: number;
sgstAmount: number;
taxRate: number;
total: number;

}

 