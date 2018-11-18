import { Component, OnInit } from '@angular/core';
import { MemesService } from './memes.service';
import { BroadcasterModalService } from '../service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {

  constructor(private _service: MemesService, private _modal: BroadcasterModalService) { }

  public articles = this._service.articles;
  public categories = this._service.categories;
  public showModal = false;
  public modalData;
  public subscription: Subscription;

  ngOnInit() {
    this.subscription = this._modal.update$
    .subscribe(update => this.showModal = update);
    console.log('articles:', this.articles);
  }

  getModal(chosen) {
    this.showModal = true;
    this.modalData = {index: chosen, story: this.articles };
  }

  addLikes(chosen) {
    this.articles[chosen].likes++;
  }

  addHates(chosen) {
    this.articles[chosen].hates++;
  }

}
