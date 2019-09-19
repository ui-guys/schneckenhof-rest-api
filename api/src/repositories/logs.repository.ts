import {DefaultCrudRepository} from '@loopback/repository';
import {Logs, LogsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LogsRepository extends DefaultCrudRepository<
  Logs,
  typeof Logs.prototype.id,
  LogsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Logs, dataSource);
  }
}
