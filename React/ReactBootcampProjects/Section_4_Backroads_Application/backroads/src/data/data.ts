export interface PageLink {
    id:number;
    href:string;
    text:string;
}

export interface SocialLink {
    id:number;
    href:string;
    icon:string;
}

/****************************Data Structures****************************** */
export const pageLinks:PageLink[] = [
    {id:1, href:'#home',text:'home'},
    {id:2, href:'#about',text:'about'},
    {id:3, href:'#services',text:'services'},
    {id:4, href:'#tours',text:'tours'},
];


export const socialLinks:SocialLink[] = [
    {id: 1, href:'https://www.twitter.com', icon:'fab fa-facebook'},
    {id: 2, href:'https://www.twitter.com', icon:'fab fa-twitter'},
    {id: 3, href:'https://www.twitter.com', icon:'fab fa-squarespace'},
]