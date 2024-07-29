import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CraftsmanDatasService } from '../craftsman-datas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-craftsman-sheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craftsman-sheet.component.html',
  styleUrl: './craftsman-sheet.component.scss'
})
export class CraftsmanSheetComponent implements OnInit{
  title = 'Présentation'

  craftsman: any;

  constructor(
    private route: ActivatedRoute,
    private craftsmanDatasService: CraftsmanDatasService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const craftsmanId = +params.get('id')!;
      this.craftsman = this.craftsmanDatasService.craftsmen.find(p => p.id === craftsmanId);
    });
  }

  getStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('bi-star-fill'); // étoile pleine
    }

    if (halfStar) {
      stars.push('bi-star-half'); // étoile à moitié remplie
    }

    while (stars.length < 5) {
      stars.push('bi-star'); // étoile vide
    }

    return stars;
  }
}
