import Storagee from "./Storage";

enum Locals {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token',
    LIST = 'list'
}

export default class Tokens extends Storagee<Locals> {

    private static instance?: Tokens;

    constructor() {
        super();
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new Tokens();
        }

        return this.instance;
    }

    public getAccessToken() {
        return this.get(Locals.ACCESS_TOKEN);
    }

    public setAccessToken(accessToken: string) {
        this.set(Locals.ACCESS_TOKEN, accessToken);
    }

    public getList() {
        return this.get(Locals.LIST);
    }

    public setList(list: string) {
        this.set(Locals.LIST, list);
    }

    public clear() {
        this.removeItems([Locals.ACCESS_TOKEN,Locals.LIST])
    }
}

/*

As you can see we have passed Locals to the Storage generic. This means
that only keys from this enum can be used in the get, set, clearItem and clearItems method

It makes sense to use singleton because it will be enough to have a single instance of out Token class.
*/