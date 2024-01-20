
export interface ICustomError {
    getMessage():string | undefined;
    getCode():number | undefined;
}

export class CustomErr extends Error implements ICustomError{

    public code:number | undefined;
    public info: Info | undefined;

    constructor(message:string){
        super(message);
    }

    getMessage(): string | undefined {
        return this.info?.message;
    }
    getCode(): number | undefined{
        return this.code;
    }
}

export interface Info{
    message:string;
}