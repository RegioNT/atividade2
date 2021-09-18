import Vinho from '../models/Vinho';

export default class VinhoRepository {
  private vinhos: Array<Vinho>;

  constructor() {
    this.vinhos = [];
  }

  public findAll(): Array<Vinho> {
    return this.vinhos;
  }

  public findByCode(code: number): Vinho | undefined {
    return this.vinhos.find(v => v.code === code);
  }

  public save({
    name,
    type,
    marca,
    buy,
    sell,
    tag,
    likes,
    code,
  }: Vinho): Vinho {
    const vinho = new Vinho({
      name,
      type,
      marca,
      buy,
      sell,
      tag,
      likes,
      code,
    });
    this.vinhos.push(vinho);
    return vinho;
  }
}
