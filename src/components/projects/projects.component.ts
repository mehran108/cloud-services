import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() numVisible = 5;
  public products = [
    {
        id: '1000',
        code: 'f230fh0g3',
        name: '01. Analyzing existing IT infrastructure',
        description: 'We kickstart the project by doing an in-depth analysis of your business processes and software infrastructure. The objective behind the analysis is to find every stumbling block that can prevent the successful execution of the DevOps strategy.',
        image: 'assets/images/devops-detail-img1.png',
    },
    {
        id: '1001',
        code: 'nvklal433',
        name: '02. Developing a tailor-made solution',
        description: 'Our team suggests a tailor-made DevOps solution considering your current IT issues, giving you the prospect on the team size, budget, and timeframe before implementing the solution. Our team also lays a complete roadmap for the<br> perfect execution of the solution.',
        image: 'assets/images/devops-detail-img2.png',
    },
    {
        id: '1002',
        code: 'zz21cz3c1',
        name: '03. Deploying the best solution',
        description: 'Using the industry-best practices and state-of-the-art tools, our DevOps engineers set up a CI/CD pipeline that is in line with your business objectives and organize a clear release management process while tackling all problems related to your software infrastructure efficiently.',
        image: 'assets/images/devops-detail-img3.png',
    },
    {
        id: '1003',
        code: '244wgerg2',
        name: '04. Providing 24/7 support',
        description: 'As one of the fastest growing cloud and DevOps companies, we offer 24/7 end-to-end support to your infrastructures, workloads, and operations. We also help you with real-time incident tracking and resolving support cases, enabling you to take the right actions faster.',
        image: 'assets/images/devops-detail-img4.png',
    },
   
];
public responsiveOptions!: Array<any>;

  constructor() { }

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
