export interface Iorder {
id: number,
orderdate: Date,
engineerId: number,
orderItems: IOrderItems[],
}


export interface IOrderItems{

productId: number,
sparePartId: number,
quantity: number,
}
