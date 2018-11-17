import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.addlike();
  }
  addlike() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    // if (this.readyState == 4 && this.status == 200) {
    // alert("Thanks");
    // }
    // };
    // xhttp.open("GET", "https://jayswiftdatabase.herokuapp.com/addlike/a", true);
    // xhttp.send();
  }

}
