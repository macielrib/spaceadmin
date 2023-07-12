const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a pasta onde os arquivos estáticos estão localizados
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'register-page.html'));
});

app.post('/register', (req, res) => {
  const { nick, email, password, checkbox } = req.body;

  // Verifica se todos os campos estão preenchidos
  if (!nick || !email || !password || !checkbox) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos e aceite os termos de serviço.' });
  }

  registerButton.addEventListener('click', function(event) {
    event.preventDefault();
  
    if (!checkbox.checked) {
      alert('É obrigatório marcar a checkbox para prosseguir com o registro.');
      return;
    }
  
    // Restante da lógica de registro...
  });
  

  // Verifica se o email é válido
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Por favor, insira um email válido.' });
  }

  // Verifica se a senha atende aos critérios
  if (!isStrongPassword(password)) {
    return res.status(400).json({ message: 'A senha deve conter pelo menos 8 caracteres, uma letra maiúscula e um número.' });
  }

  // Registro do usuário
  // ...

  res.status(200).json({ message: 'Registro realizado com sucesso!' });
});

// Função auxiliar para validar o formato do email
function isValidEmail(email) {
  // Expressão regular para validar o formato do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(email);
}

// Função auxiliar para verificar a força da senha
function isStrongPassword(password) {
  // Verifica se a senha tem pelo menos 8 caracteres
  if (password.length < 8) {
    return false;
  }

  // Verifica se a senha contém pelo menos uma letra maiúscula
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Verifica se a senha contém pelo menos um número
  if (!/\d/.test(password)) {
    res.status(200).json({ message: 'nanainnaoa ' });

    return false;
  }

  return true;
}


app.listen(3001, () => {
  console.log('Servidor backend em execução na porta 3000');
});
