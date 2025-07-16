package com.PizzaExpressDeliveryLTDA.backend.strategy;

public interface IStrategy<T> {
    String processar(T entidade);
}
