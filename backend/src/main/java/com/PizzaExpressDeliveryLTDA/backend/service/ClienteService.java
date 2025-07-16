package com.PizzaExpressDeliveryLTDA.backend.service;

import com.PizzaExpressDeliveryLTDA.backend.entity.Cliente;
import com.PizzaExpressDeliveryLTDA.backend.repository.ClienteRepository;
import com.PizzaExpressDeliveryLTDA.backend.strategy.IStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    private final List<IStrategy> strategies;

    @Autowired
    public ClienteService(List<IStrategy> strategies) {
        this.strategies = strategies;
    }

    public List<Cliente> listarTodos() {
        return clienteRepository.findAll();
    }

    public ResponseEntity<?> realizarLogin(Cliente cliente) {
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

    public ResponseEntity<?> cadastrarCliente(Cliente cliente) {
        for (IStrategy strategy : strategies) {
            String erro = strategy.processar(cliente);
            if (erro != null) {
                return ResponseEntity.badRequest().body(Map.of("message", erro));
            }
        }

        if (clienteRepository.findByEmail(cliente.getEmail()).isPresent()) {
            return ResponseEntity.status(409).body(Map.of("message", "Email já cadastrado"));
        }

        Cliente novoCliente = clienteRepository.save(cliente);
        Map<String, Object> response = new HashMap<>();
        response.put("userId", novoCliente.getId());
        response.put("message", "Cadastro realizado com sucesso! Bem-vindo, " + novoCliente.getNome());
        return ResponseEntity.status(201).body(response);
    }

    public Cliente buscarPorId(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    public Cliente atualizar(Long id, Cliente clienteAtualizado) {
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

    public void deletar(Long id) {
        clienteRepository.deleteById(id);
    }
}

