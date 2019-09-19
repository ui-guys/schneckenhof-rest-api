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
import {Packaging} from '../models';
import {PackagingRepository} from '../repositories';

export class PackagingController {
  constructor(
    @repository(PackagingRepository)
    public packagingRepository : PackagingRepository,
  ) {}

  @post('/packagings', {
    responses: {
      '200': {
        description: 'Packaging model instance',
        content: {'application/json': {schema: getModelSchemaRef(Packaging)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Packaging, {
            title: 'NewPackaging',
            exclude: ['id'],
          }),
        },
      },
    })
    packaging: Omit<Packaging, 'id'>,
  ): Promise<Packaging> {
    return this.packagingRepository.create(packaging);
  }

  @get('/packagings/count', {
    responses: {
      '200': {
        description: 'Packaging model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Packaging)) where?: Where<Packaging>,
  ): Promise<Count> {
    return this.packagingRepository.count(where);
  }

  @get('/packagings', {
    responses: {
      '200': {
        description: 'Array of Packaging model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Packaging)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Packaging)) filter?: Filter<Packaging>,
  ): Promise<Packaging[]> {
    return this.packagingRepository.find(filter);
  }

  @patch('/packagings', {
    responses: {
      '200': {
        description: 'Packaging PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Packaging, {partial: true}),
        },
      },
    })
    packaging: Packaging,
    @param.query.object('where', getWhereSchemaFor(Packaging)) where?: Where<Packaging>,
  ): Promise<Count> {
    return this.packagingRepository.updateAll(packaging, where);
  }

  @get('/packagings/{id}', {
    responses: {
      '200': {
        description: 'Packaging model instance',
        content: {'application/json': {schema: getModelSchemaRef(Packaging)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Packaging> {
    return this.packagingRepository.findById(id);
  }

  @patch('/packagings/{id}', {
    responses: {
      '204': {
        description: 'Packaging PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Packaging, {partial: true}),
        },
      },
    })
    packaging: Packaging,
  ): Promise<void> {
    await this.packagingRepository.updateById(id, packaging);
  }

  @put('/packagings/{id}', {
    responses: {
      '204': {
        description: 'Packaging PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() packaging: Packaging,
  ): Promise<void> {
    await this.packagingRepository.replaceById(id, packaging);
  }

  @del('/packagings/{id}', {
    responses: {
      '204': {
        description: 'Packaging DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.packagingRepository.deleteById(id);
  }
}
