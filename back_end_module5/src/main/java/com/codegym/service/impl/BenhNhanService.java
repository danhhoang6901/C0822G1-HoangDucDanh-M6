package com.codegym.service.impl;

import com.codegym.model.BenhNhan;
import com.codegym.repository.IBenhAnRepository;
import com.codegym.repository.IBenhNhanRepository;
import com.codegym.service.IBenhNhanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BenhNhanService implements IBenhNhanService {
    @Autowired
    IBenhNhanRepository benhNhanRepository;

    @Override
    public List<BenhNhan> getAll() {
        return benhNhanRepository.getAll();
    }
}
