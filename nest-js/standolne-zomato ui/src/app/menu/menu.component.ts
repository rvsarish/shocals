import { Component, OnInit,Input  } from '@angular/core';
import { IonHeader,IonText,IonSearchbar,IonLabel,IonIcon,IonSelectOption,IonSelect,IonGrid,IonImg,IonItem,IonButton,IonRow,IonCol, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { SelectedItemsService } from '../selected-items.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonHeader,CommonModule ,IonText,IonSearchbar,IonIcon,IonSelect,IonLabel,IonSelectOption,IonGrid,IonImg,IonItem,IonButton,IonRow,IonCol, IonToolbar, IonTitle, IonContent],
})

export class MenuComponent  implements OnInit {
  itemsSelectedCount: number = 0;
  constructor(private selectedItemsService: SelectedItemsService) { }


  ngOnInit() {}
  @Input() menuItem: any;
  quantity: number = 0;

  incrementQuantity(amount: number) {
    this.quantity += amount;
    this.selectedItemsService.incrementItemsSelectedCount();

  }

  decrementQuantity(amount: number) {
    if (this.quantity > 0) {
      this.quantity -= amount;
      this.selectedItemsService.decrementItemsSelectedCount();
    }
  }
}
