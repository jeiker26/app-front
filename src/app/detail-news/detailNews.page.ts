import { Component } from '@angular/core';
import { NewsService } from '../../shared/api/news/news.service';
import { News } from '../../shared/interfaces/news/news.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-news',
  templateUrl: 'detailNews.page.html',
  styleUrls: ['detailNews.page.scss'],
})
export class DetailNewsPage {
  private newsItem: News;
  private urlParamsSub;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute) {
    this.urlParamsSub = this.route.params.subscribe(({ id }) => {
      this.newsService.getNew(id).subscribe((res) => {
        console.log(res);
        this.newsItem = res[0];
      });
    });
  }

  ngOnInit() {
  }
}
