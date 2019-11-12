import { Injectable } from '@angular/core';
import { Message } from '../types';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = "http://localhost:3000";
  private socket;
  private messages:Message[] = [];
  private connection;

  constructor() {
    this.socket = io(this.url);

    this.connection = this.onMessageReceived().subscribe((message:string) => {
      this.messages.push({
        text: message
      });
    })
  }

  getMessages():Array<Message> {
    return this.messages;
  }

  sendMessage(message:string) {
    this.socket.emit('chat message', message);
  }

  onMessageReceived() {
    let observable = new Observable(observer => {
      this.socket.on('chat message', data => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }
}
