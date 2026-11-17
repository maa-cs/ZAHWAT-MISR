const menu=document.getElementById('menuButton');
const nav=document.getElementById('navLinks');
if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة');
    menu.textContent=open?'×':'☰';
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','فتح القائمة');
    menu.textContent='☰';
  }));
}
const back=document.getElementById('to-top');
const header=document.getElementById('site-header');
function handleScroll(){
  back?.classList.toggle('visible',window.scrollY>280);
  header?.classList.toggle('scrolled',window.scrollY>8);
}
window.addEventListener('scroll',handleScroll,{passive:true});
handleScroll();
back?.addEventListener('click',()=>window.scrollTo({
  top:0,behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'
}));
const year=document.getElementById('year');
if(year)year.textContent=String(new Date().getFullYear());

// Use optional enhanced photos only once their files exist; preserve safe fallbacks.
document.querySelectorAll('img[data-enhanced]').forEach(img=>{
  const target=img.getAttribute('data-enhanced');
  if(!target||target===img.getAttribute('src'))return;
  const test=new Image();
  test.onload=()=>{
    img.src=target;
    img.removeAttribute('data-enhanced');
  };
  test.onerror=()=>{};
  test.src=target;
});
