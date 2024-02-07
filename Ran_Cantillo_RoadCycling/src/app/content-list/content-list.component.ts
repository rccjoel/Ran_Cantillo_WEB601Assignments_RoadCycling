import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentList: Content[] = [
    {
      id: 1,
      title: 'Shimano',
      description: 'Japanese builder',
      creator: 'Creator 1',
      imgURL: '/Ran_Cantillo_RoadCycling/src/assets/img/image-icon.jpg',
      type: 'type placeholder',
      tags: ['first', 'second']
    },
    {
      id: 2,
      title: 'Sram',
      description: 'American builder',
      creator: 'Creator 2',
      imgURL: '/Ran_Cantillo_RoadCycling/src/assets/img/image-icon.jpg',
      type: 'type placeholder',
      tags: ['first', 'second']
    },
    {
      id: 3,
      title: 'Campagnolo',
      description: 'Italian builder',
      creator: 'Creator 3',
      imgURL: '/Ran_Cantillo_RoadCycling/src/assets/img/image-icon.jpg',
      type: 'type placeholder',
      tags: ['first', 'second']
    },
    {
      id: 4,
      title: 'Pinarello',
      description: 'Italian bike builder',
      creator: 'Creator 4',
      imgURL: '/Ran_Cantillo_RoadCycling/src/assets/img/image-icon.jpg',
      type: 'type placeholder',
      tags: ['first', 'second']
    },
    {
      id: 5,
      title: 'De Rosa',
      description: 'Italian bike builder',
      creator: 'Creator 5',
      imgURL: '/Ran_Cantillo_RoadCycling/src/assets/img/image-icon.jpg',
      type: 'type placeholder',
      tags: ['first', 'second']
    },
    {
      id: 6,
      title: 'Canyon',
      description: 'German bike builder',
      creator: 'Creator 6',
      imgURL: '/Ran_Cantillo_RoadCycling/src/assets/img/image-icon.jpg',
      type: 'type placeholder',
      tags: ['first', 'second']
    }
  ]

  handleImageClick(item: Content): void {
    console.log(item.id);
    console.log(item.title);
  }
}
