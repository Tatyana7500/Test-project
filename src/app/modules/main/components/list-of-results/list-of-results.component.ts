import { Component, Input, OnInit } from '@angular/core';
import { SearchGithub } from 'src/app/core/models';
import { Store } from '@ngrx/store';
import { RepositoryActions } from 'src/app/core/store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-results',
  templateUrl: './list-of-results.component.html',
  styleUrls: ['./list-of-results.component.less']
})
export class ListOfResultsComponent {
  @Input() lists: SearchGithub[] = [];

  constructor(
    private router: Router,
    private readonly store: Store
  ) { }

  onClickItem(url: string): void {
    if (url) {
      this.store.dispatch(RepositoryActions.sendGetRequestInfoByRepository({ payload: url }));
      this.router.navigateByUrl('/repository');
    }
  }
}
