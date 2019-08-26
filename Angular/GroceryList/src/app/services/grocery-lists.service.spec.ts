import { TestBed } from '@angular/core/testing';

import { GroceryListsService } from './grocery-lists.service';

describe('GroceryListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroceryListsService = TestBed.get(GroceryListsService);
    expect(service).toBeTruthy();
  });
});
