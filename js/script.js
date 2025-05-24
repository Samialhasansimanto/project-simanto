document.querySelectorAll('.single_item button').forEach(button => {
    button.addEventListener('click', () => {


      let existingMsg = document.querySelector('.construction-msg');
      if (!existingMsg) {
        const msgBox = document.createElement('div');
        msgBox.classList.add('construction-msg');
        msgBox.innerHTML = `
          <span>This site is under construction</span>
          <button class="close-msg">&times;</button>
        `;
        
        document.body.appendChild(msgBox);
  

        msgBox.querySelector('.close-msg').addEventListener('click', () => {
          msgBox.remove();
        });
      }
    });
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  if(menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

  document.querySelectorAll('nav.menu ul li a[href="#footer"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const footerSection = document.querySelector('#footer');
      footerSection.scrollIntoView({ behavior: 'smooth' });

      if(menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
  });
  