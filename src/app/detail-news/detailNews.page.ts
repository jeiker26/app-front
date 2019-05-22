import { Component } from '@angular/core';
import { NewsService } from '../../shared/api/news/news.service';
import { News } from '../../shared/interfaces/news/news.interface';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-detail-news',
  templateUrl: 'detailNews.page.html',
  styleUrls: ['detailNews.page.scss'],
})
export class DetailNewsPage {
  private newsItem: News;
  private urlParamsSub;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private iab: InAppBrowser) {
    this.urlParamsSub = this.route.params.subscribe(({ id }) => {
      this.newsService.getNew(id).subscribe((res) => {
        this.newsItem = res;
      });
    });
  }

  ngOnInit() {
  }

  openUrl(link: string) {
    const browser = this.iab.create(link);
  }
}
