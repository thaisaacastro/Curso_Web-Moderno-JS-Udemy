document.querySelectorAll('.tag').forEach(elemento => {
  const tagName = box.tagName.toLowerCase() // colocar todas letras em minusc

  elemento.style.borderColor = '#616161'

  if (!box.classList.contains('nolabel')) {
    const label = document.createElement('label')
    label.style.backgroundColor = '#616161'
    label.innerHTML = tagName
    elemento.insertBefore(label, elemento.childNodes)

  }
})
