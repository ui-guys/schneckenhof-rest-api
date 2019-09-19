import {DefaultCrudRepository} from '@loopback/repository';
import {Wine, WineRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WineRepository extends DefaultCrudRepository<
  Wine,
  typeof Wine.prototype.type,
  WineRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Wine, dataSource);
  }
}
