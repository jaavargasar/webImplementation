import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';

import { HttpModule } from '@angular/http';

import {PageComponent} from './page/page.component';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService,HttpModule,PageComponent]
    });
  });

  it('should ...', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
