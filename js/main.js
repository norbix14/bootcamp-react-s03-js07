document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')

	window.addEventListener('scroll', controlScroll)

	function controlScroll() {
		const st = document.body.scrollTop || document.documentElement.scrollTop
		const display = toTop.style.display
		const cl = toTop.classList
		if (st > 300) {
			toTop.style.display = 'block'
			cl.remove('hide')
			cl.add('show')
			setTimeout(() => {cl.add('rotate')}, 2100)
	  } else {
			if (display === 'block') {
				cl.remove('show')
				cl.add('hide')
				setTimeout(() => {
					cl.remove('rotate')
					toTop.style.display = 'none'
				}, 2000)
			}
	  }
	}

	toTop.addEventListener('click', () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})

	const ej01 = (str = 'origin') => str.split('').map(char => (['a', 'e', 'i', 'o', 'u'].includes(char) ? '1' : char)).join('')
	const ej02 = (num, limit = 10) => Array.from(Array((limit + 1) - num).keys()).map(n => n + num)
	const ej03 = (arr = [10, '20', 30, '40', 50]) => arr.map(el => typeof el === 'string' ? Number(el) : el)
	const ej04 = (arr = [2, 4, 7, 1, 2, 'foo', 7, 'bar', 'qux', 3, 'foo']) => [...new Set(arr)]

	document.addEventListener('click', e => {
		const { target: { tagName, id } } = e
		if (tagName === 'BUTTON') {
			switch (id) {
				case 'ej01':
					return alert(ej01())
				case 'ej02':
					const p2 = parseInt(prompt('Ingresá un dígito del 1 al 10: '))
					return alert(ej02(p2))
				case 'ej03':
					return alert(ej03())
				case 'ej04':
					return alert(ej04())
				default:
					console.log('ELEGIR EJERCICIO')
			}
		}
	})

})
