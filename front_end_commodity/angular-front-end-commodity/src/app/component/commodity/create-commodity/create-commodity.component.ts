import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CommodityService} from "../../../service/commodity.service";
import {TrademarkService} from "../../../service/trademark.service";
import {Trademark} from "../../../model/trademark";

@Component({
  selector: 'app-create-commodity',
  templateUrl: './create-commodity.component.html',
  styleUrls: ['./create-commodity.component.css']
})
export class CreateCommodityComponent implements OnInit {
  commodityForm: FormGroup;
  trademarkList: Trademark[] = [];

  constructor(private commodityService: CommodityService, private trademarkService: TrademarkService) {
    this.commodityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      cpu: new FormControl(),
      capacity: new FormControl(),
      trademark: new FormControl(),
      price: new FormControl(),
      image: new FormControl(),
      camera: new FormControl(),
      selfie: new FormControl(),
      screenSize: new FormControl(),
      guarantee: new FormControl(),
      origin: new FormControl(),
      description: new FormControl(),
      codeQr: new FormControl(),
      quantity: new FormControl()
    });
    this.trademarkService.getAllTrademark().subscribe(next => {
      this.trademarkList = next;
    })
  }

  ngOnInit(): void {
  }

  addCommodity() {
    if (this.commodityForm.valid) {
      const commodity = this.commodityForm.value;
      this.commodityService.addCommodity(commodity).subscribe(next => {
        alert("Thêm mới hàng hóa thành công");
        this.commodityForm.reset();
      })
    }
  }
}
