export interface ILink {
    id:string;
    href:string;
    text:string;
}

export interface ISkill {
    id:string;
    title:string;
    icon:JSX.Element;
    text:string;
}

export interface IProject {
    id:string;
    img:string;
    url:string;
    github:string;
    title:string;
    text:string;
}