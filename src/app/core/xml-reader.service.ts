declare var require: any;

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
const xml2js = require('xml2js');


@Injectable({
  providedIn: 'root'
})
export class XmlReaderService {

  constructor(private http: HttpClient) { }

  getSessionData() {
    return this.http
      .get('/assets/xml/2242.xml', { responseType: 'text' })
      .pipe(switchMap(async xml => await this.parseXmlToJson(xml)));
  }

  async parseXmlToJson(xml: any) {
    return await xml2js
      .parseStringPromise(xml, {explicitArray: false})
      .then((res) => res);
  }
}
