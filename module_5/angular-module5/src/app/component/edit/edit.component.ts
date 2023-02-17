import {Component, OnInit} from '@angular/core';
import {BenhAnService} from "../../service/benh-an.service";
import {BenhNhanService} from "../../service/benh-nhan.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {BenhNhan} from "../../model/benh-nhan";
import {differenceInDays} from "date-fns";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  benhAnForm: FormGroup
  benhNhan: BenhNhan[] = [];

  constructor(private benhAnService: BenhAnService, private benhNhanService: BenhNhanService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      this.id = +next.get("id");
      this.getBenhAn(this.id);
    });
    this.benhNhanService.getAll().subscribe(next => {
      this.benhNhan = next;
    })
  }

  ngOnInit(): void {
  }

  private getBenhAn(id: number) {
    this.benhAnService.findById(id).subscribe(next => {
      this.benhAnForm = new FormGroup({
        maBenhAn: new FormControl(next.maBenhAn),
        maBenhNhan: new FormControl(next.tenBenhNhan.maBenhNhan),
        ngayNhapVien: new FormControl(next.ngayNhapVien, [Validators.required]),
        ngayRaVien: new FormControl(next.ngayRaVien, [Validators.required]),
        lyDoNhapVien: new FormControl(next.lyDoNhapVien, [Validators.required]),
        phuongPhapDieuTri: new FormControl(next.phuongPhapDieuTri, [Validators.required]),
        bacSiDieuTri: new FormControl(next.bacSiDieuTri, [Validators.required]),
        tenBenhNhan: new FormControl(next.tenBenhNhan.tenBenhNhan, [Validators.required, Validators.pattern("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}")])
      }, {validators: this.checkNgayNhapVienTruocNgayRaVien})
    })
  }

  update(id: number) {
    if (this.benhAnForm.valid) {
      const benhAn = this.benhAnForm.value;
      this.benhAnService.update(id, benhAn).subscribe(next => {
        alert("Chỉnh sửa thành công");
        this.router.navigateByUrl("");
      })
    }
  }

  checkNgayNhapVienTruocNgayRaVien(temp: AbstractControl) {
    let ngayNhapVien = new Date(temp.get("ngayNhapVien")?.value);
    let ngayRaVien = new Date(temp.get("ngayRaVien")?.value);
    let check = differenceInDays(ngayRaVien, ngayNhapVien);
    return (check < 0) ? {"invalid": true} : null;
  }
}
