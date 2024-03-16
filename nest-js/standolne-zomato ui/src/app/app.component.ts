import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,CommonModule],
})
export class AppComponent {
  constructor() {} quantity: number = 0;


  incrementQuantity(amount: number) {
    this.quantity += amount;
  }

  decrementQuantity(amount: number) {
    if (this.quantity > 0) {
      this.quantity -= amount;
    }
  }

  toggleQuantityButton() {
    return this.quantity === 0;
  }
}
