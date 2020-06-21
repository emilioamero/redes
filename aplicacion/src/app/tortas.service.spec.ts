import { TestBed } from '@angular/core/testing';

import { TortasService } from './tortas.service';

describe('TortasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TortasService = TestBed.get(TortasService);
    expect(service).toBeTruthy();
  });
});
