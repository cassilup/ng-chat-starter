import { Component, OnInit, Input, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Message } from 'src/app/types';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input() messages: Message[];
  @ViewChild('messagesWrapper', {static: false}) messagesWrapper: ElementRef;

  constructor() {}

  ngAfterViewChecked(): void {
    this.scrollToBottom();
}

scrollToBottom() {
    try {
        this.messagesWrapper.nativeElement.scrollTop = this.messagesWrapper.nativeElement.scrollHeight;
    } catch (e) {
        console.error(e);
    }
}
  ngOnInit() {
  }

}
