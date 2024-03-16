import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemsService {
  private itemsSelectedCount: number = 0;

  constructor() { }

  getItemsSelectedCount(): number {
    return this.itemsSelectedCount;
  }

  incrementItemsSelectedCount(): void {
    this.itemsSelectedCount++;
  }

  decrementItemsSelectedCount(): void {
    if (this.itemsSelectedCount > 0) {
      this.itemsSelectedCount--;
    }
  }
}
