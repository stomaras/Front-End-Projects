export interface Planet{
    [key:number]:PlanetTravel
}

export interface PlanetTravel {
    id:number;
    title: string;
    childIds:number[],
}