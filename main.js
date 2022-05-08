window.addEventListener('scroll', onscroll )

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se a secao passou da linha
  // quais dados vou precisar?

  // o top da secao
  const sectionTop = section.offsetTop 

  // a altura da secao
  const sectionHeight = section.offsetHeight 

  // o top da secao chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // informacoes dos dados e da logica
  /*console.log(
    'O top da secao chegou ou passou da linha?',
    sectionTopReachOrPassedTargetline
  )*/
  // verificar se a base esta abaixo da linha alvo
  //quais dados vou precisar?

  // a secao termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da secao passou da linha alvo 
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  //console.log('O fundo da secao passou da linha?', sectionEndPassedTargetline)
  
  // limites da secao
  const sectionBoundaries = 
  sectionTopReachOrPassedTargetline && 
  !sectionEndPassedTargetline

  
  const sectionId = section.getAttribute("id")
  const menuElement = document
  .querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);