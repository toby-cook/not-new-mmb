import { Component } from '@angular/core';
import { XmlReaderService } from './core/xml-reader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sessionData$: Observable<Array<any>>; 
  

  constructor(public xmlReader: XmlReaderService) {}

  ngOnInit(): void {
    this.sessionData$ =  this.xmlReader.getSessionData();
  }
}
