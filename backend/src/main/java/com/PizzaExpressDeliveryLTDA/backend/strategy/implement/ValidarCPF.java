package com.PizzaExpressDeliveryLTDA.backend.strategy.implement;

import com.PizzaExpressDeliveryLTDA.backend.entity.Cliente;
import com.PizzaExpressDeliveryLTDA.backend.strategy.IStrategy;
import org.springframework.stereotype.Component;

@Component
public class ValidarCPF implements IStrategy<Cliente> {

    @Override
    public String processar(Cliente cliente) {
        String cpf = cliente.getCpf();

        if (cpf == null || cpf.isBlank()) {
            return "CPF não pode ser vazio.";
        }

        cpf = cpf.replaceAll("\\D", ""); // Remove não dígitos

        if (cpf.length() != 11 || cpf.matches("(\\d)\\1{10}")) {
            return "CPF inválido.";
        }

        if (!isCPFValido(cpf)) {
            return "CPF inválido (verificação de dígitos falhou).";
        }

        return null;
    }

    private boolean isCPFValido(String cpf) {
        int[] pesos1 = {10, 9, 8, 7, 6, 5, 4, 3, 2};
        int[] pesos2 = {11, 10, 9, 8, 7, 6, 5, 4, 3, 2};

        int soma1 = 0;
        for (int i = 0; i < 9; i++) {
            soma1 += Character.getNumericValue(cpf.charAt(i)) * pesos1[i];
        }

        int digito1 = (soma1 * 10) % 11;
        if (digito1 == 10) digito1 = 0;

        int soma2 = 0;
        for (int i = 0; i < 10; i++) {
            soma2 += Character.getNumericValue(cpf.charAt(i)) * pesos2[i];
        }

        int digito2 = (soma2 * 10) % 11;
        if (digito2 == 10) digito2 = 0;

        return digito1 == Character.getNumericValue(cpf.charAt(9)) &&
                digito2 == Character.getNumericValue(cpf.charAt(10));
    }
}
