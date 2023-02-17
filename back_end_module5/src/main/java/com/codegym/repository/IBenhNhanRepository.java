package com.codegym.repository;

import com.codegym.model.BenhNhan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IBenhNhanRepository extends JpaRepository<BenhNhan, Integer> {
    @Query(value = "select * from benh_nhan", nativeQuery = true)
    List<BenhNhan> getAll();
}
