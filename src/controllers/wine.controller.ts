import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Wine} from '../models';
import {WineRepository} from '../repositories';

export class WineController {
  constructor(
    @repository(WineRepository)
    public wineRepository : WineRepository,
  ) {}

  @post('/wines', {
    responses: {
      '200': {
        description: 'Wine model instance',
        content: {'application/json': {schema: getModelSchemaRef(Wine)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wine, {
            title: 'NewWine',
            exclude: ['id'],
          }),
        },
      },
    })
    wine: Omit<Wine, 'id'>,
  ): Promise<Wine> {
    return this.wineRepository.create(wine);
  }

  @get('/wines/count', {
    responses: {
      '200': {
        description: 'Wine model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Wine)) where?: Where<Wine>,
  ): Promise<Count> {
    return this.wineRepository.count(where);
  }

  @get('/wines', {
    responses: {
      '200': {
        description: 'Array of Wine model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Wine)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Wine)) filter?: Filter<Wine>,
  ): Promise<Wine[]> {
    return this.wineRepository.find(filter);
  }

  @patch('/wines', {
    responses: {
      '200': {
        description: 'Wine PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wine, {partial: true}),
        },
      },
    })
    wine: Wine,
    @param.query.object('where', getWhereSchemaFor(Wine)) where?: Where<Wine>,
  ): Promise<Count> {
    return this.wineRepository.updateAll(wine, where);
  }

  @get('/wines/{id}', {
    responses: {
      '200': {
        description: 'Wine model instance',
        content: {'application/json': {schema: getModelSchemaRef(Wine)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Wine> {
    return this.wineRepository.findById(id);
  }

  @patch('/wines/{id}', {
    responses: {
      '204': {
        description: 'Wine PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wine, {partial: true}),
        },
      },
    })
    wine: Wine,
  ): Promise<void> {
    await this.wineRepository.updateById(id, wine);
  }

  @put('/wines/{id}', {
    responses: {
      '204': {
        description: 'Wine PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() wine: Wine,
  ): Promise<void> {
    await this.wineRepository.replaceById(id, wine);
  }

  @del('/wines/{id}', {
    responses: {
      '204': {
        description: 'Wine DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.wineRepository.deleteById(id);
  }
}
