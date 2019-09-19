import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class News extends Entity {
  @property({
    type: 'date',
  })
  relevantFrom?: string;

  @property({
    type: 'date',
  })
  relevantTo?: string;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  shortDescription?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  homePageDescription?: string;

  @property({
    type: 'boolean',
  })
  showOnHome?: boolean;


  constructor(data?: Partial<News>) {
    super(data);
  }
}

export interface NewsRelations {
  // describe navigational properties here
}

export type NewsWithRelations = News & NewsRelations;
