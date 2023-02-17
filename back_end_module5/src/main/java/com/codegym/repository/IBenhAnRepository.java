package com.codegym.repository;

import com.codegym.model.BenhAn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface IBenhAnRepository extends JpaRepository<BenhAn, Integer> {
    @Query(value = "select * from benh_an", nativeQuery = true)
    List<BenhAn> getAll();

    @Modifying
    @Query(value = "insert into benh_an(bac_si_dieu_tri,ly_do_nhap_vien,ma_benh_an,ngay_nhap_vien,ngay_ra_vien,phuong_phap_dieu_tri,ten_benh_nhan_id) values (:bacSiDieuTri,:lyDoNhapVien,:maBenhAn,:ngayNhapVien,:ngayRaVien,:phuongPhapDieuTri,:benhNhanId)", nativeQuery = true)
    void createBenhAn(@Param("bacSiDieuTri") String bacSiDieuTri,
                      @Param("lyDoNhapVien") String lyDoNhapVien,
                      @Param("maBenhAn") String maBenhAn,
                      @Param("ngayNhapVien") String ngayNhapVien,
                      @Param("ngayRaVien") String ngayRaVien,
                      @Param("phuongPhapDieuTri") String phuongPhapDieuTri,
                      @Param("benhNhanId") int benhNhanId);

    @Modifying
    @Query(value = "delete from benh_an where benh_an.id=:id", nativeQuery = true)
    void deleteId(@Param("id") int id);

    @Query(value = "select * from benh_an where id =:id",nativeQuery = true)
    BenhAn findId(@Param("id") int id);

    @Modifying
    @Query(value = "update benh_an set bac_si_dieu_tri=:bacSiDieuTri,ly_do_nhap_vien = :lyDoNhapVien,ma_benh_an=:maBenhAn,ngay_nhap_vien=:ngayNhapVien,ngay_ra_vien=:ngayRaVien,phong_dieu_tri=:phongDieuTri,benh_nhan_id=:benhNhanId", nativeQuery = true)
    void editBenhAn(@Param("bacSiDieuTri") String bacSiDieuTri,
                    @Param("lyDoNhapVien") String lyDoNhapVien,
                    @Param("maBenhAn") String maBenhAn,
                    @Param("ngayNhapVien") String ngayNhapVien,
                    @Param("ngayRaVien") String ngayRaVien,
                    @Param("phuongPhapDieuTri") String phuongPhapDieuTri,
                    @Param("benhNhanId") int benhNhanId);}
