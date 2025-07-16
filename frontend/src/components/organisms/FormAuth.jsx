import React from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import logoV from '../assets/logoV.png';

const FormAuth = ({ type, formData, onChange, onSubmit, errors }) => {
  const titles = {
    'register-cliente': 'Cadastro Cliente',
    'login-cliente': 'Login Cliente',
    'register-motoboy': 'Cadastro Motoboy',
    'login-motoboy': 'Login Motoboy',
  };

  const renderFields = () => {
    switch (type) {
      case 'register-cliente':
        return (
          <>
            <FormField id="nome" label="Nome" value={formData.nome} onChange={onChange} error={errors.nome} />
            <FormField id="email" label="Email" type="email" value={formData.email} onChange={onChange} error={errors.email} />
            <FormField id="senha" label="Senha" type="password" value={formData.senha} onChange={onChange} error={errors.senha} />
            <FormField id="confirmarSenha" label="Confirmar Senha" type="password" value={formData.confirmarSenha || ''} onChange={onChange} error={errors.confirmarSenha} />
            <FormField id="endereco" label="Endereco" type="endereco" value={formData.endereco} onChange={onChange} error={errors.endereco} />
            <FormField id="telefone" label="Telefone" type="telefone" value={formData.telefone} onChange={onChange} error={errors.telefone} />
            <FormField id="cpf" label="CPF" type="Cpf" value={formData.cpf} onChange={onChange} error={errors.cpf} />
          </>
        );
      case 'login-cliente':
        return (
          <>
            <FormField id="email" label="Email" type="email" value={formData.email} onChange={onChange} error={errors.email} />
            <FormField id="senha" label="Senha" type="password" value={formData.senha} onChange={onChange} error={errors.senha} />
          </>
        );
      case 'register-motoboy':
        return (
          <>
            <FormField id="nome" label="Nome" value={formData.nome} onChange={onChange} error={errors.nome} />
            <FormField id="email" label="Email" type="email" value={formData.email} onChange={onChange} error={errors.email} />
            <FormField id="placaVeiculo" label="Placa da Moto" value={formData.placaVeiculo} onChange={onChange} error={errors.placaVeiculo} />
            <FormField id="senha" label="Senha" type="password" value={formData.senha} onChange={onChange} error={errors.senha} />
          </>
        );
      case 'login-motoboy':
        return (
          <>
            <FormField id="email" label="Email" type="email" value={formData.email} onChange={onChange} error={errors.email} />
            <FormField id="senha" label="Senha" type="password" value={formData.senha} onChange={onChange} error={errors.senha} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={onSubmit} className="container p-4 bg-light rounded shadow-sm">
      <div className="text-center mb-4">
        <img
          src={logoV}
          alt="Logo"
          style={{ width: '120px', height: 'auto', marginBottom: '16px' }}
          className="d-block mx-auto"
        />
        <h2>{titles[type] || ''}</h2>
      </div>
      {renderFields()}
      <div className="mt-3 text-center">
        <Button>{type.includes('register') ? 'Cadastrar' : 'Entrar'}</Button>
      </div>
    </form>
  );
};

export default FormAuth;