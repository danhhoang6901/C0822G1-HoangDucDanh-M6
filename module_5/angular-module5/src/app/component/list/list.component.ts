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

  constructor(private benhAnService: BenhAnService) {
    this.benhAnService.getAll().subscribe(next => {
      this.benhAn = next;
    })
  }

  ngOnInit(): void {
    this.benhAnService.getAll().subscribe(next => {
      this.benhAn = next;
    })
  }

  delete(id: number) {
    this.benhAnService.delete(id).subscribe(next => {
      this.benhAn = next;
      this.msg = "Xóa thành công";
      this.ngOnInit();
    })
  }
}
