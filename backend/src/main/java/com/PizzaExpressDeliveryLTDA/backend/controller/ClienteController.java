package com.PizzaExpressDeliveryLTDA.backend.controller;


import com.PizzaExpressDeliveryLTDA.backend.entity.Cliente;
import com.PizzaExpressDeliveryLTDA.backend.repository.ClienteRepository;
import com.PizzaExpressDeliveryLTDA.backend.service.ClienteService;
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
    private ClienteService clienteService;

    @GetMapping
    public List<Cliente> listarClientes() {
        return clienteService.listarTodos();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Cliente cliente) {
        return clienteService.realizarLogin(cliente);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Cliente cliente) {
        return clienteService.cadastrarCliente(cliente);
    }

    @GetMapping("/{id}")
    public Cliente buscarCliente(@PathVariable Long id) {
        return clienteService.buscarPorId(id);
    }

    @PutMapping("/{id}")
    public Cliente atualizarCliente(@PathVariable Long id, @RequestBody Cliente clienteAtualizado) {
        return clienteService.atualizar(id, clienteAtualizado);
    }

    @DeleteMapping("/{id}")
    public void deletarCliente(@PathVariable Long id) {
        clienteService.deletar(id);
    }
}

