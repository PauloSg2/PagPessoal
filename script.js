// Validação e envio do formulário d
document.getElementById('contatoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('msgSucesso').style.display = 'block';
    this.reset();
});


document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

