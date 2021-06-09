
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-menu]');
    const header = document.querySelector('[data-header]');

    burger.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('burger--active');
      menu.classList.toggle('menu--active');
      header.classList.toggle('bg--active');
    });