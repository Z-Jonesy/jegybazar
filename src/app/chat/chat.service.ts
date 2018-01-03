import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../shared/user.service';
import {ChatMessageModel} from './model/chat.model';

@Injectable()
export class ChatService {

  constructor(protected userService: UserService) { }    //mock adatokat fogunk használni, mocked Service


  addMessage(roomId: string, msg: string): Observable<boolean> {
    return null;
  }

  getRoomMessage(roomId: string): Observable<ChatMessageModel[]> {
    return null;
  }

}
