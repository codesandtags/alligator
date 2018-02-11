import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UiService {

  loadingStateChange = new Subject<boolean>();

}
