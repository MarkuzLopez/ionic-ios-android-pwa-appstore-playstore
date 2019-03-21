import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  publisher = '';

  constructor(private dataServices: DataService) { }

  ngOnInit() {
   this.superHeroes =
    this.dataServices.getSuperHeroes();
  }

  segmentChanged(event: any) {
    const valorSegmento  = event.detail.value;
    if (valorSegmento === 'todos') {
       this.publisher = '';
      return;
    }

    this.publisher =  valorSegmento;
  }

}
