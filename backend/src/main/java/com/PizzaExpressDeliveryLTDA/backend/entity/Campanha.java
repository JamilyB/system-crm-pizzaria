package com.PizzaExpressDeliveryLTDA.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Campanha {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String midiaUsada;

    private LocalDate dataCampanha;

    private double taxaRetorno;

    @ElementCollection
    private List<String> clientesAtingidos;

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMidiaUsada() {
        return midiaUsada;
    }

    public void setMidiaUsada(String midiaUsada) {
        this.midiaUsada = midiaUsada;
    }

    public LocalDate getDataCampanha() {
        return dataCampanha;
    }

    public void setDataCampanha(LocalDate dataCampanha) {
        this.dataCampanha = dataCampanha;
    }

    public double getTaxaRetorno() {
        return taxaRetorno;
    }

    public void setTaxaRetorno(double taxaRetorno) {
        this.taxaRetorno = taxaRetorno;
    }

    public List<String> getClientesAtingidos() {
        return clientesAtingidos;
    }

    public void setClientesAtingidos(List<String> clientesAtingidos) {
        this.clientesAtingidos = clientesAtingidos;
    }
}

