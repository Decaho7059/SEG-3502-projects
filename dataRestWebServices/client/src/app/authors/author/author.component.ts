import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authors } from '../authorModel/author.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AuthorService } from '../authorService/author.service';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css'],
    standalone: true,
    imports: [NgIf, NgFor, CommonModule]
})
export class AuthorComponent implements OnInit {
  selectedAuthor: Authors | null = null;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private authorService: AuthorService = inject(AuthorService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']); 
      this.authorService.getAuthor(id).subscribe(author => {
        if (author) {
          this.selectedAuthor = author;
        } else {
          console.error('Auteur non trouvé');
        }
      });
    });
  }
}
