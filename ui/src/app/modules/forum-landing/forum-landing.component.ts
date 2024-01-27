import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { ForumList } from 'src/app/models/ForumList';

@Component({
  selector: 'app-forum-landing',
  templateUrl: './forum-landing.component.html',
  styleUrls: ['./forum-landing.component.css']
})
export class ForumLandingComponent implements OnInit{
forumList: ForumList []=[];
selectedForum: ForumList;

ngOnInit(){
  const forum : ForumList = {
    id: 1,
    name: "Hello World!",
    ownerName: "UserName",
    catagory: "test",
    replyCount: 0,
    lastPostDate: "4/29/2023 at 10:17"
  
  }
  const secondForum : ForumList = {
    id: 2,
    name: "another test!",
    ownerName: "thepandaofnom",
    catagory: "test",
    replyCount: 1,
    lastPostDate: "4/29/2023 at 10:16" 
  }
  const thirdForum : ForumList = {
    id: 3,
    name: "post for date sorrt",
    ownerName: "thepandaofnom",
    catagory: "test",
    replyCount: 15,
    lastPostDate: "4/28/2023 at 10:16" 
  }
  const forthForum : ForumList = {
    id: 4,
    name: "post for date sorrt again",
    ownerName: "thepandaofnom",
    catagory: "test",
    replyCount: 15,
    lastPostDate: "3/28/2023 at 10:16" 
  }
  this.forumList.push(forum);
  this.forumList.push(secondForum);
  this.forumList.push(thirdForum);
  this.forumList.push(forthForum);
}

ngOnDestroy(): void {}

loadForum(){
  console.log(this.selectedForum);
}
forumSelect(event: any){
  console.log(event);
}

customSort(event: SortEvent) {
  event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
  });
}
}
