{
  const fnSetPrd = async () => {
    let result = await fetch('./js/product.json')
    let prdArr = await result.json()
    prdArr.forEach(v => {
      let { name, desc, imgpath } = v
      document.querySelector('.list').insertAdjacentHTML('beforeend', `
        <figure>
          <img src='./img/${imgpath}'>
          <figcaption>
          <h3>${name}</h3>
          <p>${desc}</p>
          </figcaption>
        </figure>
      `)
    });
  }
  fnSetPrd()
}
