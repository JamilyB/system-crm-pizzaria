package com.PizzaExpressDeliveryLTDA.backend.repository;

import com.PizzaExpressDeliveryLTDA.backend.entity.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long> {
}
