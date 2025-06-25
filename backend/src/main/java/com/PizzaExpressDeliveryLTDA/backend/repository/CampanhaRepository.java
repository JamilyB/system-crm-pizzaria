package com.PizzaExpressDeliveryLTDA.backend.repository;

import com.PizzaExpressDeliveryLTDA.backend.entity.Campanha;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CampanhaRepository extends JpaRepository<Campanha, Long> {
}
