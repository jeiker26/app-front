import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../shared/api/news/news.service';
import { News } from '../../../shared/interfaces/news/news.interface';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})
export class ListPage implements OnInit {
  private news: News[] = [];
  constructor(private newsService: NewsService) {
    this.newsService.getNews().subscribe((res) => {
      this.news = res;
    });
  }

  ngOnInit() {
  }
}
