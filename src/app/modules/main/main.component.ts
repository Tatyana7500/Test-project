import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { SearchActions, LocalSettingsActions } from '../../core/store/actions';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  selectSearchString,
  selectIsLoaderSearch,
  selectFilterLanguages,
  selectFilterWithDescription,
  selectFilteredSearchResults,
  selectFilterSelectedLanguage,
} from 'src/app/core/store/selectors';
import { SearchGithub } from '../../core/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  private search$: Observable<string> = this.store.select(selectSearchString);
  private searchResults$: Observable<SearchGithub[]> = this.store.select(selectFilteredSearchResults);
  private isLoaderSearch$: Observable<boolean> = this.store.select(selectIsLoaderSearch);
  private filterLanguages$: Observable<string[]> = this.store.select(selectFilterLanguages);
  private filterWithDescription$: Observable<boolean> = this.store.select(selectFilterWithDescription);
  private filterSelectedLanguage$: Observable<string> = this.store.select(selectFilterSelectedLanguage);

  public search: string = '';
  public searchResults: SearchGithub[] = [];
  public isLoaderSearch: boolean = false;
  public filterLanguages: string[] = ['TypeScript', 'JavaScript', 'Swift', 'C#', 'C++', 'Java', 'Dart', 'Ruby'];
  public filterWithDescription = true;
  public filterSelectedLanguage = '';
  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.search$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(searchString => this.search = searchString);

    this.searchResults$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(searchResults => this.searchResults = searchResults);

    this.filterSelectedLanguage$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(filterSelectedLanguage => this.filterSelectedLanguage = filterSelectedLanguage);

    this.filterWithDescription$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(filterWithDescription => this.filterWithDescription = filterWithDescription);

    this.isLoaderSearch$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(isLoaderSearch => this.isLoaderSearch = isLoaderSearch);

    // this.filterLanguages$
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe(filterLanguages => this.filterLanguages = filterLanguages);
  }

  public changeSearch(search: string): void {
    this.search = search;
    if (this.search) {
      this.store.dispatch(LocalSettingsActions.setSearchStore({payload: this.search}));
      this.store.dispatch(LocalSettingsActions.setIsLoaderStore({ payload: true }));
      this.store.dispatch(SearchActions.sendGetRequestSearchByGithub({ payload: this.search }));
    }
  }

  public toggleWithDescription(): void {
    this.store.dispatch(LocalSettingsActions.toggleWithDescriptionStore());
  }

  public changeLanguage(value: string): void {
    this.store.dispatch(LocalSettingsActions.changeSelectedLanguageStore({ payload: value }));
  }
}
