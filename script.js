// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
    
//   ];
  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

  showingSubMenu = false

  const mainEl = document.querySelector('main');
  mainEl.style.backgroundColor = 'var(--main-bg)'
  mainEl.innerHTML="<h1>SEI Rock!</h1>"
  mainEl.classList.add("flex-ctr")
  
  const topMenuEl = document.querySelector("#top-menu")
  topMenuEl.style.height = "100%"
  topMenuEl.style.backgroundColor = 'var( --top-menu-bg)';
  topMenuEl.classList.add("flex-around")
  
  
   menuLinks.forEach((menuLink) => {
   
   const aEl = document.createElement('a')
    aEl.setAttribute("href", menuLink.href)
    aEl.textContent = menuLink.text;

      topMenuEl.appendChild(aEl);
    })

   const subMenuEl = document.querySelector("#sub-menu")
   subMenuEl.style.height = "100%"
   subMenuEl.style.backgroundColor = "#3da4ab"
   subMenuEl.classList.add("flex-around")
   subMenuEl.style.position = "absolute"
   subMenuEl.style.top = "0"

  let topMenuLinks = document.querySelectorAll('a')
  

   topMenuEl.addEventListener("click", evt =>{
evt.preventDefault();
buildSubMenu(menuLinks[1].subLinks);
if(evt.target.tagName !== 'a')
//console.log(evt.target.innerText);
return evt

if(evt.target.className === "active"){
  showingSubMenu=false
  console.log(e.target.className)
 }
 e.target.classList.remove("active")
 console.log(e.target.className)
 
topMenuLinks.forEach((menuLinks)=>{
  menuLinks.addEventListener("click", (evt) =>{
    topMenuLinks.forEach((menuLinks)=>{
menuLinks.target.classList.remove("active")
    });
    evt.target.classList.add("active");
  })

  if (showingSubMenu){
    buildSubMenu(subLinks)
    subMenuEl.style.height = "100%";
  }else{
    showingSubMenu = false
    subMenuEl.style.height = "0"
  }
})
})
   
function buildSubMenu(subLinks){
  console.log(subLinks)
  subMenuEl.innerHTML = "";

    subLinks.forEach((subLink) =>{
    const sub = document.createElement("a")
    
    sub.setAttribute("href",subLink.href)
    sub.textContent = subLink.text
    subMenuEl.appendChild(sub)
  })
}
   
   