import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-projection',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './projection.component.html',
  styleUrl: './projection.component.css',
})
export class ProjectionComponent {}
