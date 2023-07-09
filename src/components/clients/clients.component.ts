import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  @Input() numVisible = 5;
  public products = [
    {
        id: '1000',
        code: 'f230fh0g3',
        image: 'assets/images/kfc-case-logo.svg',
        description: 'How we built a scalable and robust cloud-based food delivery application for the world’s most popular fast-food chain - KFC. The result? Massive improvement in the app’s conversion rate and number of downloads.',
        states: '28%',
        statesText: 'Increase invconversion rate',
        states1: '2 Million',
        statesText1: 'Mobile<br>app downloads',
        stateCaseStudy: 'Read Case Study',
        image1: 'assets/images/kfc-port-banner.png',
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      image: 'assets/images/ikea-case-logo.svg',
      description: 'How we built a cloud-based ERP solution for the world’s largest furniture retailer - IKEA. The result? The retail outlet touts the solution as its biggest source of RoI measurement. The solution is also getting expanded in the brand’s multiple other retail outlets.',
      states: '7+',
      statesText: 'IKEA stores adopting the solution',
      stateCaseStudy: 'View Case Study',
      image1: 'assets/images/ikea-port-banner.png',
    },

];
public responsiveOptions!: Array<any>;

  constructor() {
    Carousel.prototype.onTouchMove = () => { };
   }

  ngOnInit() {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
            default: return '';
    }
}

}
