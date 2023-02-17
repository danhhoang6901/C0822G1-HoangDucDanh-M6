package com.codegym.service;

import com.codegym.model.BenhAn;

import java.util.List;

public interface IBenhAnService {
    List<BenhAn> getAll();

    void create(String bacSi, String lyDo, String ma, String ngayNhap,
                String ngayRa, String phuongPhap, int benhNhanId);

    void delete(int id);

    BenhAn findById(int id);

    void update(String bacSiDieuTri, String lyDoNhapVien, String maBenhAn, String ngayNhapVien, String ngayRaVien, String phuongPhapDieuTri, int id);
}
