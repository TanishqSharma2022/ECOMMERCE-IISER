export interface Product {
    _id: string,
    name: string, 
    images: Array<Image>,
    price: number,
    colorId: string,
    categoryId: string,
    description: string,
    size: string
}

export interface Image{
    id: string,
    url: string,
}