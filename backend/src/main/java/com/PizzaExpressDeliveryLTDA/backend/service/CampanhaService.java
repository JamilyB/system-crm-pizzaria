package com.PizzaExpressDeliveryLTDA.backend.service;

import com.PizzaExpressDeliveryLTDA.backend.entity.Campanha;
import com.PizzaExpressDeliveryLTDA.backend.repository.CampanhaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CampanhaService {

    @Autowired
    private CampanhaRepository campanhaRepository;

    public Campanha salvar(Campanha campanha) {
        return campanhaRepository.save(campanha);
    }

    public List<Campanha> listarTodas() {
        return campanhaRepository.findAll();
    }

    public Optional<Campanha> buscarPorId(Long id) {
        return campanhaRepository.findById(id);
    }

    public Campanha atualizar(Long id, Campanha campanhaAtualizada) {
        return campanhaRepository.findById(id)
                .map(campanha -> {
                    campanha.setMidiaUsada(campanhaAtualizada.getMidiaUsada());
                    campanha.setDataCampanha(campanhaAtualizada.getDataCampanha());
                    campanha.setTaxaRetorno(campanhaAtualizada.getTaxaRetorno());
                    campanha.setDescricao(campanhaAtualizada.getDescricao());
                    campanha.setBeneficio(campanhaAtualizada.getBeneficio());
                    campanha.setClientesAtingidos(campanhaAtualizada.getClientesAtingidos());
                    return campanhaRepository.save(campanha);
                })
                .orElseThrow(() -> new RuntimeException("Campanha não encontrada"));
    }

    public void deletar(Long id) {
        campanhaRepository.deleteById(id);
    }

    public Optional<Campanha> cativarCliente(Long id, String cliente) {
        return campanhaRepository.findById(id).map(campanha -> {
            if (!campanha.getClientesCativados().contains(cliente)) {
                campanha.getClientesCativados().add(cliente);
                campanha.calcularTaxaRetorno();
                campanhaRepository.save(campanha);
            }
            return campanha;
        });
    }
}