import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8080/benhAn?page=" + page);
  }

  create(benhAn): Observable<any> {
    return this.httpClient.post("http://localhost:8080/benhAn", benhAn);
  }

  update(id: number, benhAn: any): Observable<any> {
    return this.httpClient.put<any>("http://localhost:8080/benhAn/" + id, benhAn);
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8080/benhAn/" + id)
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8080/benhAn/" + id);
  }
}
