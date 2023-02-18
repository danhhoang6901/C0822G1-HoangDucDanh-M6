import {Component, OnInit} from '@angular/core';
import {BenhAnService} from "../../service/benh-an.service";
import {BenhAn} from "../../model/benh-an";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  benhAn: BenhAn[] = [];
  temp: BenhAn = {};
  msg = '';
  number: number;
  totalPage: number;
  pageNumber: number[];
  first: boolean;
  last: boolean;

  constructor(private benhAnService: BenhAnService) {
    this.getAllPage(this.number);
  }

  ngOnInit(): void {
    this.getAllPage(this.number);
  }

  delete(id: number) {
    this.benhAnService.delete(id).subscribe(next => {
      this.benhAn = next;
      this.msg = "Xóa thành công";
      this.ngOnInit();
    })
  }
  getAllPage(page: number) {
    this.benhAnService.getAll(page).subscribe(next => {
      this.benhAn = next.content;
      this.number = next.number;
      this.totalPage = next.totalPage;
      this.first = next.first;
      this.last = next.last;
    })
  }

}
