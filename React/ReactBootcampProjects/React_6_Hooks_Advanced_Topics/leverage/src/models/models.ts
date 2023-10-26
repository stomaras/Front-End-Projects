export interface IPeople {
    id:number;
    name:string;
    nickName?: string;
    images?: Image[];
}

export interface Image {
    small: SmallImage;
}

export interface SmallImage {
    url:string;
}

