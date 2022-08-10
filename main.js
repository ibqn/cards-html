const selectColors = () => {
  const productColors = document.querySelectorAll('.js-product-color')

  productColors.forEach((productColor) => {
    productColor.addEventListener('click', ({ target }) => {
      target.parentElement.querySelector('.active').classList.remove('active')

      target.classList.add('active')

      const productImage =
        target.parentElement.parentElement.querySelector('.js-product-image')
      productImage.src = target.getAttribute('data-image')
    })
  })
}

selectColors()
