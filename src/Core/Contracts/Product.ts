export default interface Product {
    id: number,
    image: string,
    alt: string,
    name: string,
    description: string,
    selectedSize: string,
    prices: {[key: string]: number},
    amount?: number
}