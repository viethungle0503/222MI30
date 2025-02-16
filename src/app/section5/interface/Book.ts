export interface IBook {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  updateDate: string;
  quantity: string;
  cdCode: string;
  publisherCode: string;
  idHolder: string;
}
export class Book {
  constructor(
    public id: string = '',
    public name: string = '',
    public price: string = '',
    public description: string = '',
    public image: string = '',
    public updateDate: string = '',
    public quantity: string = '',
    public cdCode: string = '',
    public publisherCode: string = '',
    public idHolder: string = id
  ) {}
}
export interface IOldBook {
  BookId: string;
  BookName: string;
  Price: number;
  Image: string;
}
export class OldBook {
  constructor(
    public BookId: string = '',
    public BookName: string = '',
    public Price: number = 0,
    public Image: string = ''
  ) {}
}
