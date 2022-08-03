export interface ReviewInfo {
    author: string;
    comment: string;
    date: string;
    id: string;
    rating: number;
}

export interface SimilarProductInfo {
    id: number,
    title: string;
    slug: string;
    brand: string;
    image: string;
    price: number;
}