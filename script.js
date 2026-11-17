const menu=document.getElementById('menuButton');const nav=document.getElementById('navLinks');if(menu&&nav){menu.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(isOpen));menu.textContent=isOpen?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}))}
const back=document.getElementById('to-top');const header=document.getElementById('site-header');function handleScroll(){back?.classList.toggle('visible',window.scrollY>280);header?.classList.toggle('scrolled',window.scrollY>8)}window.addEventListener('scroll',handleScroll,{passive:true});handleScroll();back?.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
document.getElementById('year').textContent=String(new Date().getFullYear());
const arabic=document.getElementById('arButton');const english=document.getElementById('enButton');const labels=[...document.querySelectorAll('.navlinks a')].map(a=>a.textContent);arabic?.addEventListener('click',()=>{document.querySelectorAll('.navlinks a').forEach((a,i)=>a.textContent=labels[i]);document.documentElement.lang='ar';document.documentElement.dir='rtl';arabic.classList.add('selected');english.classList.remove('selected');arabic.setAttribute('aria-pressed','true');english.setAttribute('aria-pressed','false')});english?.addEventListener('click',()=>{document.querySelectorAll('.navlinks a').forEach(a=>a.textContent=a.dataset.en||a.textContent);document.documentElement.lang='en';document.documentElement.dir='ltr';english.classList.add('selected');arabic.classList.remove('selected');english.setAttribute('aria-pressed','true');arabic.setAttribute('aria-pressed','false')});

/* Progressive photo upgrade: only use locally hosted new images once present. */
document.querySelectorAll('img[data-enhanced]').forEach(img=>{
 const target=img.getAttribute('data-enhanced');
 if(!target||target===img.getAttribute('src'))return;
 const candidate=new Image();
 candidate.onload=()=>{img.src=target;img.removeAttribute('data-enhanced')};
 candidate.onerror=()=>{}; // maintain current working image until the asset is published
 candidate.src=target;
});
