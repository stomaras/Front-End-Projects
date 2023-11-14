export interface Item {
    id:string;
    title:string;
    price:string;
    img:string;
    amount:number;
}

export interface ItemState {
    loading:boolean;
    cart:Map<string,Item>;
}