import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    
        title.setTitle('About Page');
    
        meta.addTags([
          { name: 'author',   content: 'Hathway.com'},
          { name: 'keywords', content: 'angular seo, about page '},
          { name: 'description', content: 'This is my Angular about page' }
        ]);
    
      }

  ngOnInit() {
  }

}
