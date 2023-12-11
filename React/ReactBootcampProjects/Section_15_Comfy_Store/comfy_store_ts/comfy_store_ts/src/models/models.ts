export interface ILink {
    id:number;
    url:string;
    text:string;
}


export interface IProduct {
    id:number;
    attributes:IAttribute;

}

export interface IAttribute {
    category:string;
    colors:string[];
    company:string;
    createdAt:string;
    description:string;
    feature:boolean;
    image:string;
    price:string;
    publishedAt:string;
    shipping:boolean;
    title:string;
    updatedAt:string;
}