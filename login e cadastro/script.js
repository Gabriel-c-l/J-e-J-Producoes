function salvarLogin() {
    const email = document.getElementById('loginNome').value;
    const senha = document.getElementById('inputLoginSenha').value;

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);

    alert('Cadastro realizado com sucesso!');
}

function pucharTelaLogin() {
    const email = document.getElementById('loginNome').value;
    const senha = document.getElementById('inputLoginSenha').value;

    const emailSalvo = localStorage.getItem('email');
    const senhaSalva = localStorage.getItem('senha');

    if (email === emailSalvo && senha === senhaSalva) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Email ou senha incorretos.');
    }
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, verifique.");
        return false;
    }

    salvarLogin(name, email, password);

    return true;
}

function salvarLogin(name, email, password) {
    alert(`Cadastro realizado com sucesso!\nNome: ${name}\nEmail: ${email}`);
}