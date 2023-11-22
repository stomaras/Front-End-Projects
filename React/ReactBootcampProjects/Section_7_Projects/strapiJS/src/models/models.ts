export interface ISublink {
    pageId:string;
    page:string;
    links: IURL[];
}

export interface IURL {
    id:string;
    label:string;
    url:string;
}