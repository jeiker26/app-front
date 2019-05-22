import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { News } from '../../interfaces/news/news.interface';
import { catchError, map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiURL: string = environment.apiUrl;
  apiURLNews: string = environment.apiUrlNews;

  constructor(private httpClient : HttpClient) {}

  getNews(): Observable<News[]> {
    return this.httpClient.get(`${this.apiURL}${this.apiURLNews}`)
      .pipe(
        map((response) => {
          if (!environment.production) {
            return response;
          }

          return response['page']['items'].map((item) => { return this.adapterNews(item); });
        }),
        catchError((error) => {
          return Observable.throw(error);
        }),
    );
  }

  getNew(id: string): Observable<News> {
    if (!environment.production) {
      return this.httpClient.get(`${this.apiURL}${this.apiURLNews}?id=${id}`)
        .pipe(
          map((response) => {
            return response[0];
          }),
          catchError((error) => {
            return Observable.throw(error);
          }),
        );
    }

    return this.httpClient.get(`${this.apiURL}${this.apiURLNews}`)
      .pipe(
        map((response) => {
          return this.adapterNews(response['page']['items'].find((item) => { return item.id === id; }));
        }),
        catchError((error) => {
          return Observable.throw(error);
        }),
      );
  }

  adapterNews(item) {
    return {
      id: item.id,
      image: item.image,
      title: item.title,
      description: item.summary,
      uri: item.htmlUrl,
    };
  }
}
