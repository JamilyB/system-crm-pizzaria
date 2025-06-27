package com.PizzaExpressDeliveryLTDA.backend.controller;


import com.PizzaExpressDeliveryLTDA.backend.entity.Cliente;
import com.PizzaExpressDeliveryLTDA.backend.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@CrossOrigin(origins = {"http://localhost:3000", "https://pizzaexpresscrm.onrender.com"})
@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping
    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Cliente cliente) {
        Optional<Cliente> optionalCliente = clienteRepository.findByEmail(cliente.getEmail());

        if (optionalCliente.isEmpty() ||
                !optionalCliente.get().getSenha().equals(cliente.getSenha())) {
            return ResponseEntity.status(401).body(Map.of("message", "Credenciais inválidas"));
        }

        Cliente clienteLogado = optionalCliente.get();
        Map<String, Object> response = new HashMap<>();
        response.put("userId", clienteLogado.getId());
        response.put("message", "Login realizado com sucesso! Bem-vindo, " + clienteLogado.getNome());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Cliente cliente) {
        if (clienteRepository.findByEmail(cliente.getEmail()).isPresent()) {
            return ResponseEntity.status(409).body(Map.of("message", "Email já cadastrado"));
        }
        Cliente novoCliente = clienteRepository.save(cliente);
        Map<String, Object> response = new HashMap<>();
        response.put("userId", novoCliente.getId());
        response.put("message", "Cadastro realizado com sucesso! Bem-vindo, " + novoCliente.getNome());
        return ResponseEntity.status(201).body(response);
    }

    @GetMapping("/{id}")
    public Cliente buscarCliente(@PathVariable Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Cliente atualizarCliente(@PathVariable Long id, @RequestBody Cliente clienteAtualizado) {
        return clienteRepository.findById(id).map(cliente -> {
            cliente.setNome(clienteAtualizado.getNome());
            cliente.setTelefone(clienteAtualizado.getTelefone());
            cliente.setEmail(clienteAtualizado.getEmail());
            cliente.setEndereco(clienteAtualizado.getEndereco());
            cliente.setCpf(clienteAtualizado.getCpf());
            cliente.setSenha(clienteAtualizado.getSenha());
            return clienteRepository.save(cliente);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deletarCliente(@PathVariable Long id) {
        clienteRepository.deleteById(id);
    }
}
