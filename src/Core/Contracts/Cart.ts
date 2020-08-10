import Product from "./Product";

export interface CartItem {
    product: Product,
    selectedSize: string,
    amount: number
}

export default interface Cart {
    items: Array<CartItem>,
    total: number,
    hash?: string | null
}