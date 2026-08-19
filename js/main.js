document.documentElement.classList.add('js');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('details').forEach(detail=>detail.addEventListener('toggle',()=>{const marker=detail.querySelector('summary span');if(marker)marker.textContent=detail.open?'−':'+'}));
const orbit=document.querySelector('.hero-orbit');
if(orbit&&matchMedia('(pointer: fine)').matches){addEventListener('pointermove',event=>{orbit.style.setProperty('--mx',((event.clientX/innerWidth-.5)*10)+'px');orbit.style.setProperty('--my',((event.clientY/innerHeight-.5)*10)+'px')},{passive:true})}
