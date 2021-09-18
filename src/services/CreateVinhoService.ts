import VinhoRepository from '../repositories/VinhoRepository';
import Vinho from '../models/Vinho';

export default class CreateVinhoService {
  private repository: VinhoRepository;

  constructor(repository: VinhoRepository) {
    this.repository = repository;
  }

  public execute({
    name,
    type,
    marca,
    buy,
    sell,
    tag,
    likes,
    code,
  }: Vinho): Vinho {
    const vinho = this.repository.findByCode(code);
    if (vinho) {
      throw Error('Vinho já cadastrado');
    } else {
      const p = new Vinho({
        name,
        type,
        marca,
        buy,
        sell,
        tag,
        likes,
        code,
      });
      this.repository.save(p);
      return p;
    }
  }
}
