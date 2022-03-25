let myCollapsible = document.getElementById("menu")

myCollapsible.addEventListener('show.bs.collapse', function() {
    let introducao = document.getElementById('introducao')
    introducao.style.transform = 'translate(-50%, 0%)'
})

myCollapsible.addEventListener('hide.bs.collapse', function() {
    let introducao = document.getElementById('introducao')
    introducao.style.transform = 'translate(-50%, -50%)'
})