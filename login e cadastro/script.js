// Função para validação do formulário de cadastro
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Verifica se os campos não estão vazios
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return false;
    }

    // Cria um objeto usuário
    const newUser = {
        name: name,
        email: email,
        password: password
    };

    // Simulação de armazenamento em local storage ou servidor
    // Aqui você poderia enviar os dados do usuário para um servidor, ou armazená-los localmente usando localStorage, por exemplo.
    // Neste exemplo, apenas armazenaremos na variável users para fins educacionais.
    users.push(newUser);

    // Limpa o formulário
    document.getElementById('registrationForm').reset();

    // Informa ao usuário que o cadastro foi realizado com sucesso
    alert('Cadastro realizado com sucesso.');

    // Redireciona para a página de login
    window.location.href = './login e cadastro/login.html';  // Ajuste o caminho conforme a estrutura do seu projeto

    // Evita que o formulário recarregue a página
    return false;
}

// Função para realizar o login
function login() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    // Verifica se o email e a senha correspondem a um usuário cadastrado
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert(`Bem-vindo, ${user.name}! Você está logado.`);
        // Aqui você pode redirecionar o usuário para outra página, por exemplo:
        window.location.href = './pagina_secreta.html';  // Exemplo de redirecionamento após o login
    } else {
        alert('Email ou senha incorretos. Tente novamente.');
    }
}
