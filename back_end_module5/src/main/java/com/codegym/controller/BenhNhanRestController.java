package com.codegym.controller;

import com.codegym.model.BenhNhan;
import com.codegym.service.IBenhNhanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("benhNhan")
@CrossOrigin("*")
public class BenhNhanRestController {
    @Autowired
    private IBenhNhanService benhNhanService;

    @GetMapping("")
    public ResponseEntity<List<BenhNhan>> getAll() {
        List<BenhNhan> benhNhanList = benhNhanService.getAll();
        if (benhNhanList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(benhNhanList, HttpStatus.OK);
    }

}
