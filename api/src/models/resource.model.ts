import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Resource extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  resourceId?: string;

  @property({
    type: 'string',
  })
  weblinkUrl?: string;

  @property({
    type: 'string',
  })
  originalFilename?: string;

  @property({
    type: 'string',
  })
  type?: string;


  constructor(data?: Partial<Resource>) {
    super(data);
  }
}

export interface ResourceRelations {
  // describe navigational properties here
}

export type ResourceWithRelations = Resource & ResourceRelations;
