import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Logs extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  hostname?: string;

  @property({
    type: 'string',
  })
  url?: string;

  @property({
    type: 'object',
  })
  APIResponseTime?: object;

  @property({
    type: 'string',
  })
  OverallResponseTime?: string;

  @property({
    type: 'string',
  })
  msg?: string;

  @property({
    type: 'date',
  })
  time?: string;


  constructor(data?: Partial<Logs>) {
    super(data);
  }
}

export interface LogsRelations {
  // describe navigational properties here
}

export type LogsWithRelations = Logs & LogsRelations;
