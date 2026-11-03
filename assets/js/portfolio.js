(() => {
 const root=document.documentElement,button=document.querySelector('[data-theme-toggle]'),icon=button?.querySelector('[data-theme-icon]'),label=button?.querySelector('[data-theme-text]');
 const media=window.matchMedia('(prefers-color-scheme: light)');
 const read=()=>{try{return sessionStorage.getItem('r3b0ot-theme')||'system'}catch(_){return 'system'}};
 let preference=read();
 const apply=()=>{
  const theme=preference==='system'?(media.matches?'light':'dark'):preference;
  root.dataset.theme=theme;root.dataset.themePreference=preference;
  if(button){
   const name=preference.charAt(0).toUpperCase()+preference.slice(1);
   button.setAttribute('aria-label','Theme: '+name+'. Activate to change theme.');button.title='Theme: '+name;
   if(label)label.textContent=preference.toUpperCase();
   if(icon){const paths={system:'<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/>',dark:'<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"/>',light:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>'};icon.innerHTML=paths[preference]}
  }
  const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute('content',theme==='light'?'#F5F2F8':'#09080D');
 };
 apply();
 button?.addEventListener('click',()=>{preference=({system:'dark',dark:'light',light:'system'})[preference]||'system';try{sessionStorage.setItem('r3b0ot-theme',preference)}catch(_){}apply()});
 media.addEventListener?.('change',()=>{if(preference==='system')apply()});
 const toggle=document.querySelector('[data-menu-toggle]'),nav=document.querySelector('[data-nav]');
 if(toggle&&nav){const close=()=>{nav.classList.remove('is-open');document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false')};
 toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');document.body.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open))});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});window.addEventListener('resize',()=>{if(innerWidth>700)close()})}
 const loader=document.querySelector('[data-boot-loader]');let show=false;
 if(loader){try{show=sessionStorage.getItem('r3b0ot-loader-seen')!=='1';if(show)sessionStorage.setItem('r3b0ot-loader-seen','1')}catch(_){show=false}}
 if(loader&&show&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const status=loader.querySelector('[data-boot-status]'),percent=loader.querySelector('[data-boot-percent]'),stages=[['QUESTIONING ASSUMPTIONS','12%'],['RESETTING OLD DEFAULTS','38%'],['REIMAGINING THE POSSIBLE','67%'],['BUILDING WHAT COMES NEXT','92%']];
  loader.classList.add('is-active');let stage=0;const interval=setInterval(()=>{stage=Math.min(stage+1,stages.length-1);if(status)status.textContent=stages[stage][0];if(percent)percent.textContent=stages[stage][1]},420);
  setTimeout(()=>{clearInterval(interval);if(percent)percent.textContent='100%';loader.classList.add('is-leaving');setTimeout(()=>loader.classList.remove('is-active','is-leaving'),430)},2200);
 }else if(loader)loader.remove();
 const year=document.querySelector('[data-year]');if(year)year.textContent=String(new Date().getFullYear());
 const items=document.querySelectorAll('.reveal');
 if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});items.forEach(x=>io.observe(x))}else items.forEach(x=>x.classList.add('is-visible'));
})();