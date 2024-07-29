import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CraftsmanDatasService } from '../craftsman-datas.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title = 'Trouve ton artisan !';

  topCraftsmen: any[] = [];

  constructor(private craftsmanDatasService: CraftsmanDatasService) {}

  ngOnInit(): void {
    this.craftsmanDatasService.getCraftsmen().subscribe(data => {
      //Filtre les artisan avec top: true
      this.topCraftsmen = data.filter((craftsman: any) => craftsman.top);
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
