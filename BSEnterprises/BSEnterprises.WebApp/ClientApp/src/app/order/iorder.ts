export interface Iorder {
id: number,
orderDate: Date,
engineerId: number,
orderItems: IOrderItems[],
}


export interface IOrderItems{
id : number;
productId: number,
sparePartId: number,
quantity: number,
companyId : number,
returnDefective : number,
leftInBag : number;
}
