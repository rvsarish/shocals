import { Component, OnInit } from '@angular/core';import { IonHeader,IonFooter,IonText,IonSearchbar,IonLabel,IonIcon,IonSelectOption,IonSelect,IonGrid,IonImg,IonItem,IonButton,IonRow,IonCol, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MenuComponent } from '../menu/menu.component';
import { NgStyle } from '@angular/common';
import { SelectedItemsService } from '../selected-items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFooter,CommonModule,MenuComponent,NgStyle,IonHeader ,IonText,IonSearchbar,IonIcon,IonSelect,IonLabel,IonSelectOption,IonGrid,IonImg,IonItem,IonButton,IonRow,IonCol, IonToolbar, IonTitle, IonContent],
})

export class HomePage implements OnInit {
  quantity: number = 0;
  c1 = true;
  c2 = false;
  showNextDiv: boolean = false;
  showcartorder: boolean = false;
  isProceed = false;
  restaurant: any[] = [
    {
      title: "A2B - Adyar Ananda Bhavan",
      preference: "pure-veg",
      rating: "4.3",
      timing: "",
      address: "IMPERIAL TOWERS, Mettu Street, Sarvamangala Colony, Aruna Colony Vadapalani, Egattur, Tamil Nadu - 600130",
      distance: "2.6 km",
      slot_timings: "Next Slot: 12.00 PM-14.00 PM",
      category:"Best Sellers"
    }
  ];

  menu: any[] = [
    {
      imgUrl: "../../assets/f1.png",
      name: "Chilli Panneer Dry",
      serves: "1",
      price: "₹275.00",
    },
    {
      imgUrl: "../../assets/f1.png",
      name: "Cashew Peas Masala",
      serves: "1",
      price: "₹310.00",
    },
    {
      imgUrl: "../../assets/f3.png",
      name: "Paneer Fried Rice",
      serves: "1",
      price: "₹ 270.00",
    },
    {
      imgUrl: "../../assets/f1.png",
      name: "Chilli Panneer Dry",
      serves: "1",
      price: "₹275.00",
    },
    {
      imgUrl: "../../assets/f4.png",
      name: "Paneer Fried Rice",
      serves: "1",
      price: "₹270.00",
    },

  ];

  constructor(private selectedItemsService: SelectedItemsService) {}

  ngOnInit(): void {
    this.restaurant.forEach((res) => {
      const roundedRating = Math.round(parseFloat(res.rating));
      res.ratings_star_count = roundedRating;
    });
  }

  switch_menu_btn() {
    this.c1 = true;
    this.c2 = false;
  }

  switch_reviews_btn() {
    this.c2 = true;
    this.c1 = false;
  }
  onProceedClick() {
    this.showNextDiv = true;
  }

  onSaveForLaterClick() {
    this.showcartorder = true;
    this.showNextDiv = false;
  }

  onOrderNowClick() {
    this.showcartorder = true;
    this.showNextDiv = false;
  }

  toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent) {
      if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
        dropdownContent.style.display = "block";
      } else {
        dropdownContent.style.display = "none";
      }
    }
  }

  get itemsSelectedCount(): number {
    return this.selectedItemsService.getItemsSelectedCount();
  }

  toggleQuantityButton() {
    return this.quantity === 0;
  }
}
