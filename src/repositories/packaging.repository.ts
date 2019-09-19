import {DefaultCrudRepository} from '@loopback/repository';
import {Packaging, PackagingRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PackagingRepository extends DefaultCrudRepository<
  Packaging,
  typeof Packaging.prototype.displayName,
  PackagingRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Packaging, dataSource);
  }
}
