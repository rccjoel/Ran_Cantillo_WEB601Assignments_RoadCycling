import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})

export class ContentCardComponent {
  contentList: ContentList;
  
  constructor() {
    this.contentList = new ContentList();

    const contentItem1: Content = {
      id: 1,
      title: 'Shimano',
      description: 'Japanese builder',
      creator: 'Creator 1'
    };

    const contentItem2: Content = {
      id: 2,
      title: 'Sram',
      description: 'American builder',
      creator: 'Creator 2',
    };

    const contentItem3: Content = {
      id: 3,
      title: 'Campagnolo',
      description: 'Italian builder',
      creator: 'Creator 3',
    };

    this.contentList.add(contentItem1);
    this.contentList.add(contentItem2);
    this.contentList.add(contentItem3);


  }
}
