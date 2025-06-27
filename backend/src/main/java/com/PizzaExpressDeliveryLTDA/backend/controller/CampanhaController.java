package com.PizzaExpressDeliveryLTDA.backend.controller;

import com.PizzaExpressDeliveryLTDA.backend.entity.Campanha;
import com.PizzaExpressDeliveryLTDA.backend.service.CampanhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "https://pizzaexpresscrm.onrender.com"})
@RestController
@RequestMapping("/api/campanhas")
public class CampanhaController {

    @Autowired
    private CampanhaService campanhaService;

    @PostMapping
    public ResponseEntity<Campanha> criar(@RequestBody Campanha campanha) {
        Campanha salva = campanhaService.salvar(campanha);
        return ResponseEntity.ok(salva);
    }

    @GetMapping
    public ResponseEntity<List<Campanha>> listarTodas() {
        return ResponseEntity.ok(campanhaService.listarTodas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Campanha> buscarPorId(@PathVariable Long id) {
        return campanhaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Campanha> atualizar(@PathVariable Long id, @RequestBody Campanha campanha) {
        try {
            Campanha atualizada = campanhaService.atualizar(id, campanha);
            return ResponseEntity.ok(atualizada);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/atingir")
    public ResponseEntity<Campanha> atingirCliente(
            @PathVariable Long id,
            @RequestBody String cliente) {
        String clienteId = cliente.trim().toLowerCase();
        return campanhaService.buscarPorId(id)
                .map(campanha -> {
                    List<String> atingidos = campanha.getClientesAtingidos()
                            .stream()
                            .map(s -> s.trim().toLowerCase())
                            .toList();
                    if (!atingidos.contains(clienteId)) {
                        campanha.getClientesAtingidos().add(cliente.trim());
                        campanhaService.salvar(campanha);
                    }
                    return ResponseEntity.ok(campanha);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        campanhaService.deletar(id);
        return ResponseEntity.noContent().build();
    }


    @PostMapping("/{id}/cativar")
    public ResponseEntity<Campanha> cativarCliente(
            @PathVariable Long id,
            @RequestBody String cliente) {
        return campanhaService.cativarCliente(id, cliente.trim())
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}