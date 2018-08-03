import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ApiService } from '../api.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public postId = [];

  constructor(private route: ActivatedRoute, private api: ApiService) { 
    this.route.params.subscribe(params => this.postId = params.id)
  }

  ngOnInit() {
    this.api.getDetail(this.postId).subscribe(
      data => {
        this.postId = data;
      });
  }
}
