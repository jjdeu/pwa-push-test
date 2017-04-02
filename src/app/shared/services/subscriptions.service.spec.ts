import { TestBed, inject } from '@angular/core/testing';

import { SubscriptionsService } from './subscriptions.service';

describe('SubscriptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionsService]
    });
  });

  it('should ...', inject([SubscriptionsService], (service: SubscriptionsService) => {
    expect(service).toBeTruthy();
  }));
});
