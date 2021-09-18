import { Router } from 'express';
import VinhoRepository from '../repositories/VinhoRepository';
import CreateVinhoService from '../services/CreateVinhoService';

const vinhoRouter = Router();
const vinhoRepository = new VinhoRepository();

vinhoRouter.get('/', (request, response) => {
  response.json(vinhoRepository.findAll());
});

vinhoRouter.post('/', (request, response) => {
  try {
    const service = new CreateVinhoService(vinhoRepository);
    const { name, type, marca, buy, sell, tag, likes, code, id } = request.body;
    const vinho = service.execute({
      name,
      type,
      marca,
      buy,
      sell,
      tag,
      likes,
      code,
      id,
    });
    response.status(201).json(vinho);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default vinhoRouter;
