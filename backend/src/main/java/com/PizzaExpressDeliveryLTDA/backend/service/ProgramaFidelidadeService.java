package com.PizzaExpressDeliveryLTDA.backend.service;

import com.PizzaExpressDeliveryLTDA.backend.entity.Campanha;
import com.PizzaExpressDeliveryLTDA.backend.entity.Cliente;

public class ProgramaFidelidadeService {

    public void adicionarPontos(Cliente cliente, int pontos) {
        cliente.setPontosFidelidade(cliente.getPontosFidelidade() + pontos);
        // salvar cliente no banco
    }

   // public void aplicarCampanha(Campanha campanha) {
   //     for (Cliente cliente : campanha.getClientesAtingidos()) {
    //        adicionarPontos(cliente, 10); // exemplo: 10 pontos por campanha
    //    }
   // }
}

