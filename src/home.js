import cheffImage from './assets/images/chef.png'

export default function createHome () {
  const div = document.createElement('div')
  div.setAttribute('class', 'home')

  const p1 = document.createElement('p')
  p1.textContent = 'best pizza in your country'
  const p2 = document.createElement('p')
  p2.textContent = 'made with passion since 1908'
  const p3 = document.createElement('p')
  p3.textContent = 'order online or visit us!'

  const figure = document.createElement('figure')
  figure.setAttribute('class', 'cheff')
  const img = new Image()
  img.src = cheffImage

  figure.appendChild(img)

  div.appendChild(p1)
  div.appendChild(p2)
  div.appendChild(figure)
  div.appendChild(p3)

  return div
};
