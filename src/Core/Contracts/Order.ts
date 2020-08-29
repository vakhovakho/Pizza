import OrderProduct from "./OrderProduct";

export default interface Order {
    id: number,
    address: string,
    email: string,
    number: string,
    name: string,
    comment: string,
    total: string,
    date: string,
    products: Array<OrderProduct>
}