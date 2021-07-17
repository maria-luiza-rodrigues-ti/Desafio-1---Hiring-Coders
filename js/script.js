function slider(anything){
    document.querySelector('.product').src = anything;
}

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome, 
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = `<p>Carregando...</p>`

    let pronto = `<p>Pronto!</p>`

    content.innerHTML = carregando

    setTimeout(()=>{
        content.innerHTML = pronto
    }, 1000)
})

function toggleMenu(){
    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector ('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}