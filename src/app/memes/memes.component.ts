import { Component, OnInit } from '@angular/core';
import { MemesService } from './memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {

  constructor(private _service: MemesService) { }

  public articles = [
    { story: "first story",
      meme: "../../assets/logo.png"
    },
    { story: "second story",
      meme: "../../assets/logo.png"
    },
    { story: "third story",
      meme: "../../assets/logo.png"
    },
    { story: "fourth story",
      meme: "../../assets/logo.png"
    },
    { story: "fifth story",
      meme: "../../assets/logo.png"
    }
  ];

  ngOnInit() {
    console.log('articles:', this.articles);
  }

}
