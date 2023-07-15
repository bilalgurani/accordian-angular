import {Component, OnInit} from '@angular/core';
import {FaqService} from "./Service/faq-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCardIndex: number | null = null;
  faq: any[] | undefined;
  constructor(private service: FaqService) {
    this.faq = service.getFaq();
  }

  toggle(index: number) {
    if (this.selectedCardIndex === index) {
      this.selectedCardIndex = null; // Close the selected dropdown
    } else {
      this.selectedCardIndex = index; // Open the clicked dropdown
    }
  }

}
