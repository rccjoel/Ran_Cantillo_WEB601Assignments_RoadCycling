import { Component } from '@angular/core';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

    const contentItem1: Content = {
      id: 1,
      title: 'Sample Title 1',
      description: 'Sample Description 1',
      creator: 'Sample Creator 1',
      imgURL: 'sample-image1.jpg',
      type: 'Sample Type 1',
      tags: ['Tag1', 'Tag2']
    };

    const contentItem2: Content = {
      id: 2,
      title: 'Sample Title 2',
      description: 'Sample Description 2',
      creator: 'Sample Creator 2',
      imgURL: 'sample-image2.jpg',
      type: 'Sample Type 2',
      tags: ['Tag3', 'Tag4']
    };

    const contentItem3: Content = {
      id: 3,
      title: 'Sample Title 3',
      description: 'Sample Description 3',
      creator: 'Sample Creator 3',
      imgURL: 'sample-image3.jpg',
      type: 'Sample Type 3',
      tags: ['Tag5', 'Tag6']
    };

    this.contentList.add(contentItem1);
    this.contentList.add(contentItem2);
    this.contentList.add(contentItem3);
  }
}
