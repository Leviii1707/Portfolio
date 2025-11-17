const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
  e.preventDefault()
  emailjs.sendForm('', '', '#contact-form', '')
    .then(() => {
      contactMessage.textContent = 'Message sent successfully'
      setTimeout(() => {
        contactMessage.textContent = ''
      }, 5000)
      contactForm.reset()
    }, () => {
      contactMessage.textContent = 'Message not send (service error)'
    })
}
contactForm.addEventListener('submit', sendEmail)
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
  const scrollDown = window.scrollY
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav-list a[href*=' + sectionId + ']')
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
})
sr.reveal('.perfil,.contact-form' )
sr.reveal('.info',{origin: 'left', delay: 800})
sr.reveal('.skills',{origin: 'left', delay: 1000})
sr.reveal('.about',{origin: 'left', delay: 1200})
sr.reveal('.portfolio-card, .services-card, .experience-card',{interval: 100})