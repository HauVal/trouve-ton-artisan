import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  performSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search', { query: this.searchQuery }]);
    }
  }
}
