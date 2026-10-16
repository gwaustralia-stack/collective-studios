const cursor=document.querySelector('.cursor');
window.addEventListener('mousemove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in')}}),{threshold:.08});
document.querySelectorAll('.division-card,.location-card,.intro-main,.pipeline-title').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(24px)';el.style.transition='opacity .75s ease, transform .75s ease';obs.observe(el)});
const style=document.createElement('style');style.textContent='.in{opacity:1!important;transform:none!important}';document.head.appendChild(style);
