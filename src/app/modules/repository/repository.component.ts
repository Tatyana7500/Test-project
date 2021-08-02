import { Component, OnInit, DoCheck } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { RepositoryActions } from '../../core/store/actions';
import { Observable, Subject } from 'rxjs';
import { selectInfoRepository } from '../../core/store/selectors';
import { InfoRepositoryResponse } from '../../core/models';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.less']
})
export class RepositoryComponent implements OnInit, DoCheck {
  private unsubscribe$: Subject<void> = new Subject<void>();
  private infoRepository$: Observable<InfoRepositoryResponse> = this.store.pipe(select(selectInfoRepository));

  public isShow: boolean = false;
  public infoRepository: InfoRepositoryResponse = {};
  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.infoRepository$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(infoRepository => this.infoRepository = infoRepository);

    this.isShow = !!Object.keys(this.infoRepository).length;
  }

  ngDoCheck(): void {
    this.isShow = !!Object.keys(this.infoRepository).length;
  }

  ngOnDestroy(): void {
    this.store.dispatch(RepositoryActions.setInfoRepositoryStore({ payload: {} }))
  }
}
