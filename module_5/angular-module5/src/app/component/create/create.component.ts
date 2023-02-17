import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BenhAnService} from "../../service/benh-an.service";
import {Route, Router} from "@angular/router";
import {BenhNhanService} from "../../service/benh-nhan.service";
import {BenhNhan} from "../../model/benh-nhan";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  benhAnForm: FormGroup
  benhNhan: BenhNhan[] = [];

  constructor(private benhAnService: BenhAnService, private router: Router, private benhNhanService: BenhNhanService) {
    this.benhAnForm = new FormGroup({
      id: new FormControl(),
      maBenhAn: new FormControl(),
      ngayNhapVien: new FormControl(),
      ngayRaVien: new FormControl(),
      lyDoNhapVien: new FormControl(),
      phuongPhapDieuTri: new FormControl(),
      bacSiDieuTri: new FormControl(),
      tenBenhNhan: new FormControl()
    });
    this.benhNhanService.getAll().subscribe(next => {
      this.benhNhan = next;
    })
  }

  ngOnInit(): void {
  }

  create() {
    if (this.benhAnForm.valid) {
      const benhAn = this.benhAnForm.value;
      this.benhAnService.create(benhAn).subscribe(next => {
        alert("Thêm mới thành công");
        this.router.navigateByUrl("");
      })
    }
  }
}
