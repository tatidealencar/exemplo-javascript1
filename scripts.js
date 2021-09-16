window.onload = function() {
    var elemento = document.getElementById('elemento');
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('click', function() {
            if (this.value == "Opção 2") {
                elemento.style.display = 'none';
            }
        })
    });;
}