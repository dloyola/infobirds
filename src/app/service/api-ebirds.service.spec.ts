import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiEbirdsService } from './api-ebirds.service';

describe('ApiEbirdsService', () => {
  let service: ApiEbirdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ApiEbirdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
