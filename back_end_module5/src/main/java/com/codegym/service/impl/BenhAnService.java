package com.codegym.service.impl;

import com.codegym.model.BenhAn;
import com.codegym.repository.IBenhAnRepository;
import com.codegym.service.IBenhAnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BenhAnService implements IBenhAnService {
    @Autowired
    IBenhAnRepository benhAnRepository;

    @Override
    public List<BenhAn> getAll() {
        return benhAnRepository.getAll();
    }

    @Override
    public void create(String bacSi, String lyDo, String ma, String ngayNhap,
                       String ngayRa, String phuongPhap, int benhNhanId) {
        benhAnRepository.createBenhAn(bacSi, lyDo, ma, ngayNhap, ngayRa, phuongPhap, benhNhanId);
    }

    @Override
    public void delete(int id) {
        benhAnRepository.deleteId(id);
    }

    @Override
    public BenhAn findById(int id) {
        return benhAnRepository.findId(id);
    }

    @Override
    public void update(String bacSiDieuTri, String lyDoNhapVien, String maBenhAn, String ngayNhapVien, String ngayRaVien, String phuongPhapDieuTri, int id) {
        benhAnRepository.editBenhAn(bacSiDieuTri,lyDoNhapVien,maBenhAn,ngayNhapVien,ngayRaVien,phuongPhapDieuTri,id);
    }
}
