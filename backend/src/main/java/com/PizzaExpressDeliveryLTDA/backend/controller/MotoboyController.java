package com.PizzaExpressDeliveryLTDA.backend.controller;

import com.PizzaExpressDeliveryLTDA.backend.entity.Cliente;
import com.PizzaExpressDeliveryLTDA.backend.entity.Motoboy;
import com.PizzaExpressDeliveryLTDA.backend.repository.MotoboyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/motoboys")
public class MotoboyController {

    @Autowired
    private MotoboyRepository motoboyRepository;

    @GetMapping
    public List<Motoboy> listarTodos() {
        return motoboyRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Motoboy> buscarPorId(@PathVariable Long id) {
        return motoboyRepository.findById(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Motoboy motoboy) {
        Optional<Motoboy> optionalMotoboy = motoboyRepository.findByEmail(motoboy.getEmail());

        if (optionalMotoboy.isEmpty() ||
                !optionalMotoboy.get().getSenha().equals(motoboy.getSenha())) {
            return ResponseEntity.status(401).body(Map.of("message", "Credenciais inválidas"));
        }

        Motoboy motoboyLogado = optionalMotoboy.get();
        Map<String, Object> response = new HashMap<>();
        response.put("userId", motoboyLogado.getId());
        response.put("message", "Login realizado com sucesso! Bem-vindo, " + motoboyLogado.getNome());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Motoboy motoboy) {
        if (motoboyRepository.findByEmail(motoboy.getEmail()).isPresent()) {
            return ResponseEntity.status(409).body(Map.of("message", "Email já cadastrado"));
        }
        Motoboy novoMotoboy = motoboyRepository.save(motoboy);
        Map<String, Object> response = new HashMap<>();
        response.put("userId", novoMotoboy.getId());
        response.put("message", "Cadastro realizado com sucesso! Bem-vindo, " + novoMotoboy.getNome());
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("/{id}")
    public Motoboy atualizarMotoboy(@PathVariable Long id, @RequestBody Motoboy motoboyAtualizado) {
        return motoboyRepository.findById(id).map(motoboy -> {
            motoboy.setNome(motoboyAtualizado.getNome());
            motoboy.setTelefone(motoboyAtualizado.getTelefone());
            motoboy.setCpf(motoboyAtualizado.getCpf());
            motoboy.setCnh(motoboyAtualizado.getCnh());
            motoboy.setPlacaVeiculo(motoboyAtualizado.getPlacaVeiculo());
            motoboy.setEmail(motoboyAtualizado.getEmail());
            motoboy.setSenha(motoboyAtualizado.getSenha());
            return motoboyRepository.save(motoboy);
        }).orElse(null);
    }


    @DeleteMapping("/{id}")
    public void deletarMotoboy(@PathVariable Long id) {
        motoboyRepository.deleteById(id);
    }
}
