var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
  const mainEl = document.querySelector('main');
  mainEl.style.backgroundColor = "#4a4e4d";
  mainEl.classList.add("flex-ctr")
  
  const topMenuEl = document.querySelector("#top-menu")
  topMenuEl.style.height = "100%"
  topMenuEl.style.backgroundColor = "#0e9aa7";
  topMenuEl.classList.add("flex-around")
  
  
   for(let i=0; 1< menuLinks.length; i++) {
     const menulink = menuLinks[i];
   
    const aEl = document.createElement('a')
    aEl.textContent = menulink.text;
    aEl.setAttribute("href", menulink.href);
  
    topMenuEl.appendChild(aEl);
   }