export function validarSenha(senha, confirmarSenha) {
  const errors = {};

  if (!senha || senha.length < 6) {
    errors.senha = 'A senha deve ter pelo menos 6 caracteres';
  }

  if (senha !== confirmarSenha) {
    errors.confirmarSenha = 'As senhas não coincidem';
  }

  return errors;
}