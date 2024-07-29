import { TestBed } from '@angular/core/testing';

import { CraftsmanDatasService } from './craftsman-datas.service';

describe('CraftsmanDatasService', () => {
  let service: CraftsmanDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CraftsmanDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
