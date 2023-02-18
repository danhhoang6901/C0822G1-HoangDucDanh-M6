package com.codegym.controller;

import com.codegym.model.BenhAn;
import com.codegym.model.BenhNhan;
import com.codegym.service.IBenhAnService;
import com.codegym.service.IBenhNhanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("benhAn")
@CrossOrigin("*")
public class BenhAnRestController {

    @Autowired
    private IBenhAnService benhAnService;

    @GetMapping("")
    public ResponseEntity<Page<BenhAn>> getAll(@PageableDefault(size = 1)Pageable pageable) {
        Page<BenhAn> benhAnList = benhAnService.getAllPage(pageable);
        if (benhAnList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(benhAnList, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody BenhAn benhAn) {
        benhAnService.create(benhAn.getBacSiDieuTri(), benhAn.getLyDoNhapVien(), benhAn.getMaBenhAn(), benhAn.getNgayNhapVien(), benhAn.getNgayRaVien(), benhAn.getPhuongPhapDieuTri(), benhAn.getTenBenhNhan().getId());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<BenhAn> delete(@PathVariable("id") int id) {
        benhAnService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<BenhAn> findById(@PathVariable("id") int id){
        BenhAn benhAn = benhAnService.findById(id);
        return new ResponseEntity<>(benhAn,HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<?> update(@RequestBody BenhAn benhAn){
        benhAnService.update(benhAn.getBacSiDieuTri(), benhAn.getLyDoNhapVien(), benhAn.getMaBenhAn(), benhAn.getNgayNhapVien(), benhAn.getNgayRaVien(), benhAn.getPhuongPhapDieuTri(), benhAn.getTenBenhNhan().getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
