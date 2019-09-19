import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Wine extends Entity {
  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  vintage?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'string',
  })
  awardText?: string;

  @property({
    type: 'string',
  })
  awardLevel?: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'boolean',
  })
  availability?: boolean;

  @property({
    type: 'number',
  })
  content?: number;

  @property({
    type: 'string',
  })
  varietal?: string;

  @property({
    type: 'boolean',
  })
  premium?: boolean;

  @property({
    type: 'boolean',
  })
  priority?: boolean;

  @property({
    type: 'number',
  })
  no?: number;

  @property({
    type: 'number',
  })
  alcohol?: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  packagingId?: string;


  constructor(data?: Partial<Wine>) {
    super(data);
  }
}

export interface WineRelations {
  // describe navigational properties here
}

export type WineWithRelations = Wine & WineRelations;
