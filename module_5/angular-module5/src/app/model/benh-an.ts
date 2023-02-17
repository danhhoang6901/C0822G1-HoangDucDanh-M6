import {BenhNhan} from "./benh-nhan";

export interface BenhAn {
  id?: number;
  maBenhAn?: string;
  ngayNhapVien?: string;
  ngayRaVien?: string;
  lyDoNhapVien?: string;
  phuongPhapDieuTri?: string;
  bacSiDieuTri?: string;
  tenBenhNhan?: BenhNhan;
}
