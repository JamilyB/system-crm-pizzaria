package com.PizzaExpressDeliveryLTDA.backend.repository;

import com.PizzaExpressDeliveryLTDA.backend.entity.Cliente;
import com.PizzaExpressDeliveryLTDA.backend.entity.Motoboy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MotoboyRepository extends JpaRepository<Motoboy, Long> {
    Optional<Motoboy> findByEmail(String email);
}
