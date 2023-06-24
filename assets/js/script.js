let count = 0
const value = document.querySelector('#value')

const btns = document.querySelectorAll('.btn')
console.log(btns)

//
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList
    console.log(styles)
    if (styles.contains('decrease')) {
      count--
    } else if (styles.contains('increase')) {
      count++
    } else {
      count = 0
    }

    if (count > 0) {
      value.style.color = 'white'
      value.style.backgroundColor = 'lightgreen'
    }
    if (count < 0) {
      value.style.color = 'white'
      value.style.backgroundColor = 'lightcoral'
    }
    if (count === 0) {
      value.style.color = '#fff'
      value.style.backgroundColor = '#333'
    }
    value.textContent = count
  })
})
