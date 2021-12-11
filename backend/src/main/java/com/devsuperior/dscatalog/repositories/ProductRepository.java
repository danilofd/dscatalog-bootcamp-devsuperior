package com.devsuperior.dscatalog.repositories;

import com.devsuperior.dscatalog.entities.Category;
import com.devsuperior.dscatalog.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT DISTINCT p FROM Product p " +
            "INNER JOIN p.categories c " +
            "WHERE (:category is NULL OR :category IN c)" +
            "AND (LOWER(p.name) LIKE LOWER(CONCAT('%',:name,'%')) )")
    Page<Product> find(Category category, String name, Pageable pageable);

}
