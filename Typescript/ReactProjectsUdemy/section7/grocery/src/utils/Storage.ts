interface IStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}

export default abstract class Storagee<T extends string> {
    private readonly storage: IStorage

    public constructor(getStorage = (): IStorage => window.localStorage) {
        this.storage = getStorage()
    }

    protected get(key: T): string | null {
        return this.storage?.getItem(key);
    }

    protected set(key: T, value: string): void {
        this.storage.setItem(key, value);
    }

    protected remove(key: T): void {
        this.storage.removeItem(key);
    }

    protected removeItems(keys: T[]): void {
        keys.forEach((key) => this.remove(key))
    }
}