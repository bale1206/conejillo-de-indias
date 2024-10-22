import { TestBed } from '@angular/core/testing';

import { APIControllerService } from './controller.service';

describe('ControllerService', () => {
  let service: APIControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
