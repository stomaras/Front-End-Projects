/**********************************Interfaces******************************** */
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

export interface Services {
    id:number;
    icon:string;
    title:string;
    text:string;
}

export interface ITours {
    id:number;
    image:string;
    date:string;
    title:string;
    info:string;
    location: string;
    duration:number;
    dollars:number;
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

export const services:Services[] = [
    {id:1, icon:'fas fa-wallet fa-fw', title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia'},
    {id:2, icon:'fas fa-tree fa-fw', title:'endless hiking', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
    {id:3, icon:'fas fa-socks fa-fw', title:'amazing comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia'},
]

export const tours:ITours[] = [
    {
        id:1, 
        image:'', 
        date:'august 26th, 2020',
        title:'Tibet Adventure', 
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location:'china',
        duration: 6,
        dollars: 2100
    },
    {
        id:2, 
        image:'', 
        date:'october 1th, 2020',
        title:'best of java', 
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location:'europe',
        duration:10,
        dollars:3200,
    },
    {
        id:3, 
        image:'', 
        date:'september 15th, 2020', 
        title:'explore hong kong', 
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location:'usa',
        duration:34,
        dollars: 3900,
    },
    {
        id:4, 
        image:'', 
        date:'december 5th, 2019', 
        title:'kenya highlights', 
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location:'Australia',
        duration: 19,
        dollars:8900
    },
]
    
