package com.PizzaExpressDeliveryLTDA.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class PizzariaController {

    @Value("${pizzaria.nome}")
    private String nome;

    @Value("${pizzaria.endereco}")
    private String endereco;

    @Value("${pizzaria.telefone}")
    private String telefone;

    @Value("${pizzaria.email}")
    private String email;

    @GetMapping("/pizzaria/info")
    public Map<String, String> getPizzariaInfo() {
        Map<String, String> info = new HashMap<>();
        info.put("nome", nome);
        info.put("endereco", endereco);
        info.put("telefone", telefone);
        info.put("email", email);
        return info;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        String usuario = loginData.get("usuario");
        String senha = loginData.get("senha");

        if ("admin".equals(usuario) && "1234".equals(senha)) {
            return ResponseEntity.ok("Login bem-sucedido");
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário ou senha inválidos");
    }


}

