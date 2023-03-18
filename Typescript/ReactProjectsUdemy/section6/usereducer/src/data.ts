export const data = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'Peter' },
    { id: 3, name: 'susan' },
    { id: 4, name: 'anna' },
];

export const people = [
    { id: 1, name: 'bob', nickName: 'StudMuffin' },
    { id: 2, name: 'peter' }
]



export interface Person {
    id: number;
    name: string;
    nickName: string | null;
}