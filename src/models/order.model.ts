import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Order extends Entity {
  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  total?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'object',
  })
  details?: object;

@property({
    type: 'date',
    required: true,
})
created: Date;

@property({
    type: 'date',
})
completed?: Date;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
