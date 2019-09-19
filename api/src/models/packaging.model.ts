import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Packaging extends Entity {
  @property({
    type: 'string',
  })
  displayName?: string;

  @property({
    type: 'string',
  })
  measure?: string;

  @property({
    type: 'string',
  })
  unitOfMeasure?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<Packaging>) {
    super(data);
  }
}

export interface PackagingRelations {
  // describe navigational properties here
}

export type PackagingWithRelations = Packaging & PackagingRelations;
