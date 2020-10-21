export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    id: number,
    name: string,
    description: string = '',
    price: number = 0,
    imageUrl: string = 'https://t4.ftcdn.net/jpg/03/61/76/37/360_F_361763776_P5EEPInfVHGQAwP5lqaJjwrv2SquC8oS.jpg',
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
