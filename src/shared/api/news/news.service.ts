import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { News } from '../../interfaces/news/news.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiURL: string = environment.apiUrl;
  apiURLNews: string = environment.apiUrlNews;

  constructor(private httpClient : HttpClient) {}

  getNews() {
    return this.httpClient.get(`${this.apiURL}${this.apiURLNews}`);
  }

  getNew(id: string) {
    return this.httpClient.get<News>(`${this.apiURL}${this.apiURLNews}/${id}`);
  }
}
