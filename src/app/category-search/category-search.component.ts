import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CraftsmanDatasService, Craftsman } from '../craftsman-datas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-search.component.html',
  styleUrl: './category-search.component.scss'
})
export class CategorySearchComponent implements OnInit {
  categoryName: string | null = '';
  searchQuery: string | null = '';
  craftsmen: Craftsman[] = [];

  constructor(
    private route: ActivatedRoute,
    private craftsmanDatasService: CraftsmanDatasService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('categoryName');
      this.searchQuery = params.get('query');
      this.loadArtisans();
    });
  }

  loadArtisans(): void {
    this.craftsmanDatasService.getCraftsmen().subscribe(data => {
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        this.craftsmen = data.filter((craftsman: Craftsman) =>
          craftsman.name.toLowerCase().includes(query) ||
          craftsman.specialty.toLowerCase().includes(query) ||
          craftsman.location.toLowerCase().includes(query)
        );
      } else if (this.categoryName) {
        this.craftsmen = data.filter((craftsman: Craftsman) =>
          craftsman.category === this.categoryName
        );
      }
    });
  }

  getStars(note: number): string[] {
    const fullStars = Math.floor(note);
    const halfStar = note % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return [
      ...Array(fullStars).fill('bi-star-fill'),
      ...Array(halfStar).fill('bi-star-half'),
      ...Array(emptyStars).fill('bi-star')
    ];
  }
}