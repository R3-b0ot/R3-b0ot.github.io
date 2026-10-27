(() => {
 const toggle=document.querySelector('[data-menu-toggle]'),nav=document.querySelector('[data-nav]');
 if(toggle&&nav){const close=()=>{nav.classList.remove('is-open');document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false')};
 toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');document.body.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open))});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});window.addEventListener('resize',()=>{if(innerWidth>560)close()})}
 const loader=document.querySelector('[data-boot-loader]');
 if(loader&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
   const status=loader.querySelector('[data-boot-status]'),percent=loader.querySelector('[data-boot-percent]');
   const stages=[['QUESTIONING ASSUMPTIONS','12%'],['RESETTING OLD DEFAULTS','38%'],['REIMAGINING THE POSSIBLE','67%'],['BUILDING WHAT COMES NEXT','92%']];
   loader.classList.add('is-active');
   let stage=0;
   const interval=window.setInterval(()=>{stage=Math.min(stage+1,stages.length-1);if(status)status.textContent=stages[stage][0];if(percent)percent.textContent=stages[stage][1];},420);
   window.setTimeout(()=>{window.clearInterval(interval);if(percent)percent.textContent='100%';loader.classList.add('is-leaving');window.setTimeout(()=>{loader.classList.remove('is-active','is-leaving');},430);},2200);
 } else if(loader){loader.remove();}
 const year=document.querySelector('[data-year]');if(year)year.textContent=String(new Date().getFullYear());
 const items=document.querySelectorAll('.reveal');
 if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});items.forEach(x=>io.observe(x))}
 else items.forEach(x=>x.classList.add('is-visible'));
})();