import { Injectable } from '@angular/core';

@Injectable()
export class MemesService {
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
  ]

  constructor() { }

}
