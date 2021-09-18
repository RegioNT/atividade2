import { v4 as uuidv4 } from 'uuid';

export default class Vinho {
  public id: string;
  public code: number;
  public name: string;
  public type: string;
  public marca: string;
  public buy: number;
  public sell: number;
  public tag: Array<Vinho>;
  public likes: number;

  constructor({
    code,
    name,
    type,
    marca,
    buy,
    sell,
    tag,
    likes,
  }: Omit<Vinho, 'id'>) {
    this.buy = buy;
    this.code = code;
    this.sell = sell;
    this.tag = tag;
    this.likes = likes;
    this.name = name;
    this.type = type;
    this.marca = marca;
    this.id = uuidv4();
  }
}
