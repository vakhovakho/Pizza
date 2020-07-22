import CartHeaderProduct from "./CartHeaderProduct";

export default interface CartHeader {
    products: Array<CartHeaderProduct>,
    total: number
}