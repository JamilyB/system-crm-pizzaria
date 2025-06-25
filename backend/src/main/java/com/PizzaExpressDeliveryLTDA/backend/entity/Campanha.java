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

    private String descricao;

    private String beneficio;

    @ElementCollection
    private List<String> clientesAtingidos;

    @ElementCollection
    private List<String> clientesCativados;

    // Getters e Setters

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getMidiaUsada() { return midiaUsada; }
    public void setMidiaUsada(String midiaUsada) { this.midiaUsada = midiaUsada; }

    public LocalDate getDataCampanha() { return dataCampanha; }
    public void setDataCampanha(LocalDate dataCampanha) { this.dataCampanha = dataCampanha; }

    public double getTaxaRetorno() { return taxaRetorno; }
    public void setTaxaRetorno(double taxaRetorno) { this.taxaRetorno = taxaRetorno; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public String getBeneficio() { return beneficio; }
    public void setBeneficio(String beneficio) { this.beneficio = beneficio; }

    public List<String> getClientesAtingidos() { return clientesAtingidos; }
    public void setClientesAtingidos(List<String> clientesAtingidos) { this.clientesAtingidos = clientesAtingidos; }

    public List<String> getClientesCativados() { return clientesCativados; }
    public void setClientesCativados(List<String> clientesCativados) { this.clientesCativados = clientesCativados; }

    public void calcularTaxaRetorno() {
        if (clientesAtingidos != null && !clientesAtingidos.isEmpty() && clientesCativados != null) {
            this.taxaRetorno = (double) clientesCativados.size() / clientesAtingidos.size();
        } else {
            this.taxaRetorno = 0.0;
        }
    }
}