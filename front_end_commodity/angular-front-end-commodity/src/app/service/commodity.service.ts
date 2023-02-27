import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  constructor(private httpClient: HttpClient) {
  }

  addCommodity(commodity): Observable<any> {
    return this.httpClient.post("http://localhost:8080/commodity/create", commodity);
  }
}
