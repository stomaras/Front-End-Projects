

export interface Human {
  id: number;
  name: string;
  age: number;
  image: string;
}

let human1 = {
  id: 1,
  name: 'Bertie Yates',
  age: 29,
  image:
    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
}

let human2 = {
id: 2,
name: 'Hester Hogan',
age: 32,
image:
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
}

let human3 = {
id: 3,
name: 'Larry Little',
age: 36,
image:
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
}

let human4 = {
id: 4,
name: 'Sean Walsh',
age: 34,
image:
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
}

let human5 = {
id: 5,
name: 'Lola Gardner',
age: 29,
image:
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
}

let humans: Human[] = [human1, human2, human3, human4, human5];

export default humans;
  



