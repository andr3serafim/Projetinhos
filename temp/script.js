document.addEventListener('DOMContentLoaded', (event) => {
   const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
   const skillsList = document.getElementById('skills-list');

   skills.forEach(skill => {
       let li = document.createElement('li');
       li.textContent = skill;
       skillsList.appendChild(li);
   });

   const themeButton = document.getElementById('theme-button');
   const body = document.body;

   themeButton.addEventListener('click', () => {
       if ( header.classList.contains('light-theme')){
            header.classList.remove('light-theme');
            header.classList.add('dark-theme');
       } else if (body.classList.contains('light-theme')){
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            } else {
            header.classList.remove('dark-theme');
            header.classList.add('light-theme');
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
         }
      });
});