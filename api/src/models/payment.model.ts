import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Payment extends Entity {
  @property({
    type: 'string',
  })
  pay_method?: string;


  constructor(data?: Partial<Payment>) {
    super(data);
  }
}

export interface PaymentRelations {
  // describe navigational properties here
}

export type PaymentWithRelations = Payment & PaymentRelations;
