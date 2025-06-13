package com.PizzaExpressDeliveryLTDA.backend.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Avaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipoAvaliador;

    private int nota;

    private String descricao;

    private String tipoAvaliado;

    // Pode ser Entidades diferentes
    private Long idAvaliado;

// Getters e Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipoAvaliador() {
        return tipoAvaliador;
    }

    public void setTipoAvaliador(String tipoAvaliador) {
        this.tipoAvaliador = tipoAvaliador;
    }

    public int getNota() {
        return nota;
    }

    public void setNota(int nota) {
        this.nota = nota;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getTipoAvaliado() {
        return tipoAvaliado;
    }

    public void setTipoAvaliado(String tipoAvaliado) {
        this.tipoAvaliado = tipoAvaliado;
    }

    public Long getIdAvaliado() {
        return idAvaliado;
    }

    public void setIdAvaliado(Long idAvaliado) {
        this.idAvaliado = idAvaliado;
    }

}
