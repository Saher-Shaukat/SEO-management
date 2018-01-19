import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    
        title.setTitle('Home Page');
    
        meta.addTags([
          { name: 'author',   content: 'Saher Shaukat'},
          { name: 'keywords', content: 'angular seo, angular 4 universal'},
          { name: 'description', content: 'This is my Angular SEO-based Application!' }
        ]);
    
      }
    

  ngOnInit() {
  }

}
