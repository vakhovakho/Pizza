export default interface Product {
    id: number,
    image: string,
    alt: string,
    title: string,
    description: string,
    selectedSize: string,
    prices: {[key: string]: number}
}