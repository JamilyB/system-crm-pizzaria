package com.PizzaExpressDeliveryLTDA.backend.controller;

import com.PizzaExpressDeliveryLTDA.backend.entity.Avaliacao;
import com.PizzaExpressDeliveryLTDA.backend.repository.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/avaliacoes")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @GetMapping
    public List<Avaliacao> listarTodas() {
        return avaliacaoRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Avaliacao> buscarPorId(@PathVariable Long id) {
        Optional<Avaliacao> avaliacao = avaliacaoRepository.findById(id);
        return avaliacao.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Avaliacao criar(@RequestBody Avaliacao avaliacao) {
        return avaliacaoRepository.save(avaliacao);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Avaliacao> atualizar(@PathVariable Long id, @RequestBody Avaliacao avaliacao) {
        return avaliacaoRepository.findById(id)
                .map(a -> {
                    avaliacao.setId(id);
                    return ResponseEntity.ok(avaliacaoRepository.save(avaliacao));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (avaliacaoRepository.existsById(id)) {
            avaliacaoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
