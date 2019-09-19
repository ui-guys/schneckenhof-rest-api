import {DefaultCrudRepository} from '@loopback/repository';
import {Resource, ResourceRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ResourceRepository extends DefaultCrudRepository<
  Resource,
  typeof Resource.prototype.id,
  ResourceRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Resource, dataSource);
  }
}
