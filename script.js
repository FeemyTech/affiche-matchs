const $=s=>document.querySelector(s),P=$('#poster');
const EX={brand:'M9WIN',title:'Programme foot',date:'Samedi 28 – Dimanche 29 novembre 2026',tz:'GMT',side:'Votre slogan ici',foot:'Votre page · Berita Bola',logo:'',brandimg:'',ppos:'auto',psz:80,px:0,py:0,blur:0,bpos:'auto',bx:0,by:0,hh:100,lsz:80,bsz:60,lx:0,ly:0,lpos:'auto',wa:'',tel:'',code:'',codeTxt:'',lay:'list',sub:'',fmt:'0',off:0,acc:'#d9a93f',rmbg:'1',tol:40,bg:'#160c0e',bgimg:'',dim:35,rows:[
{h:'Hamburger SV',a:'Bayern Munich',d:'Sam',t:'14:30',b:'',c:'BL'},
{h:'Borussia Dortmund',a:'Bayer Leverkusen',d:'Sam',t:'14:30',b:'',c:'BL'},{h:'Manchester United',a:'Brentford',d:'Sam',t:'15:00',b:'',c:'PL'},{h:'Everton',a:'Liverpool',d:'Dim',t:'12:00',b:'',c:'PL'},
{h:'Real Madrid',a:'Alavés',d:'Dim',t:'16:00',b:'',c:'LL'},
{h:'Arsenal',a:'Manchester City',d:'Dim',t:'16:30',b:'',c:'PL'}]};
let D=JSON.parse(JSON.stringify(EX));
try{const s=localStorage.getItem('affiche-matchs2');if(s)D=Object.assign(D,JSON.parse(s))}catch(e){}
const TC={arsenal:'#d0141f',liverpool:'#c8102e',mancity:'#2d7fc4',manchestercity:'#2d7fc4',manutd:'#c70a1a',manchesterunited:'#c70a1a',chelsea:'#0a3fa0',tottenham:'#1b2a4e',newcastle:'#2a2a2a',everton:'#1a4fb4',astonvilla:'#7a1236',westham:'#7a263a',brighton:'#0a63c9',brentford:'#d4202a',fulham:'#333333',crystalpalace:'#1b4aa0',wolves:'#c58a00',wolverhampton:'#c58a00',nottingham:'#d4202a',bournemouth:'#c8102e',leeds:'#2b3a8c',sunderland:'#d8222a',coventry:'#2c86c8',ipswich:'#1d5fb4',hull:'#e68a00',realmadrid:'#1c2b5a',barcelona:'#a50044',atletico:'#c8102e',alaves:'#1a4fb4',sevilla:'#d4202a',betis:'#0a8a3c',villarreal:'#c9a300',realsociedad:'#1f5fb4',athletic:'#d4202a',valencia:'#e07a00',celta:'#3c8fc8',bayern:'#dc052d',dortmund:'#c79a00',leverkusen:'#d4202a',leipzig:'#c8102e',hamburg:'#1f5fa8',stuttgart:'#d4202a',frankfurt:'#2a2a2a',wolfsburg:'#4a9a3c',juventus:'#2a2a2a',inter:'#1b3a8c',milan:'#c8102e',napoli:'#2c86c8',roma:'#8c1d2f',lazio:'#3c8fc8',psg:'#13265e',paris:'#13265e',marseille:'#2da6e0',lyon:'#1f4aa0',monaco:'#d4202a',porto:'#1b3a8c',benfica:'#d4202a',sporting:'#0a8a3c',ajax:'#d4202a',brugge:'#1c3f8f',lille:'#c8102e',viking:'#1d4ea0',lens:'#d4202a',celtic:'#0a8a3c',rangers:'#1b3a8c',galatasaray:'#e07a00',fenerbahce:'#1b3a8c',besiktas:'#2a2a2a',shakhtar:'#e07a00',feyenoord:'#d4202a',psv:'#d4202a',atalanta:'#1b3a8c',fiorentina:'#5b2a86',girona:'#d4202a',mallorca:'#c8102e',osasuna:'#c8102e',getafe:'#1a4fb4',rayo:'#c8102e',espanyol:'#1a4fb4',levante:'#a50044',deportivo:'#1a4fb4',malaga:'#1a8fd4',racing:'#0a8a3c',koln:'#d4202a',cologne:'#d4202a',mainz:'#d4202a',freiburg:'#d4202a',hoffenheim:'#1a4fb4',bremen:'#0a8a3c',gladbach:'#0a8a3c',augsburg:'#c8102e',unionberlin:'#d4202a',schalke:'#1a4fb4',paderborn:'#1a4fb4',alahly:'#d4202a',zamalek:'#b3141c',asec:'#e07a00',esperance:'#d4202a',mazembe:'#2a2a2a',wydad:'#d4202a',raja:'#0a8a3c',sundowns:'#c79a00'};
const PAL=['#a3141c','#1d4e89','#0b6e4f','#7a1236','#b45309','#5b2a86','#0e7490','#374151'];
const nm=t=>String(t||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
function tcol(n){const k=nm(n);if(!k)return'#5a1016';for(const x in TC)if(k.includes(x))return TC[x];let h=0;for(const c of k)h=(h*31+c.charCodeAt(0))%PAL.length;return PAL[h]}
const autoc=r=>{r.k1=tcol(r.h);r.k2=tcol(r.a)};
D.rows.forEach(r=>{if(!r.k1||!r.k2)autoc(r)});
if(D.cfg!==2){D.cfg=2;Object.assign(D,{bsz:60,bx:0,by:0,bpos:'auto',psz:80,px:0,py:0,ppos:'auto'})}
let L={};try{L=JSON.parse(localStorage.getItem('affiche-logos')||'{}')}catch(e){}
const getL=n=>{const k=nm(n);if(!k)return'';if(L[k])return L[k];for(const x in L)if(x.length>=4&&(k.includes(x)||x.includes(k)))return L[x];return''};
const sv=()=>{try{localStorage.setItem('affiche-logos',JSON.stringify(L))}catch(e){}};
function rmbg(c){const x=c.getContext('2d'),w=c.width,h=c.height,im=x.getImageData(0,0,w,h),d=im.data;
let r=0,g=0,b=0,n=0;const add=i=>{const o=i*4;if(d[o+3]>200){r+=d[o];g+=d[o+1];b+=d[o+2];n++}};
for(let i=0;i<w;i++){add(i);add((h-1)*w+i)}for(let j=0;j<h;j++){add(j*w);add(j*w+w-1)}
if(n<(w+h)*1.2)return;r/=n;g/=n;b/=n;
const T=+D.tol||40,dist=o=>Math.hypot(d[o]-r,d[o+1]-g,d[o+2]-b),seen=new Uint8Array(w*h),st=[];
const push=i=>{if(!seen[i]&&dist(i*4)<T){seen[i]=1;st.push(i)}};
for(let i=0;i<w;i++){push(i);push((h-1)*w+i)}for(let j=0;j<h;j++){push(j*w);push(j*w+w-1)}
while(st.length){const i=st.pop(),xx=i%w;if(xx>0)push(i-1);if(xx<w-1)push(i+1);if(i>=w)push(i-w);if(i<w*(h-1))push(i+w)}
for(let i=0;i<w*h;i++)if(seen[i])d[i*4+3]=0;
for(let i=0;i<w*h;i++){if(seen[i])continue;const xx=i%w;if((xx>0&&seen[i-1])||(xx<w-1&&seen[i+1])||(i>=w&&seen[i-w])||(i<w*(h-1)&&seen[i+w])){const k=Math.min(1,Math.max(0,(dist(i*4)-T)/(T*.8)));d[i*4+3]=Math.round(d[i*4+3]*(.35+.65*k))}}
x.putImageData(im,0,0)}
function shrink(f,max,type,cb,rm){const fr=new FileReader();fr.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);if(rm&&+D.rmbg&&type==='image/png')rmbg(c);cb(c.toDataURL(type,.85))};im.src=fr.result};fr.readAsDataURL(f)}
const esc=t=>String(t??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shift=(t,o)=>{const m=/^(\d{1,2}):(\d{2})$/.exec(String(t).trim());if(!m||!+o)return t;let h=(+m[1]+ +o)%24;if(h<0)h+=24;return String(h).padStart(2,'0')+':'+m[2]};
const GC=r=>`<div class="gc"><div class="gk">${crest(r.hl||getL(r.h),r.h)}<div class="gn">${esc(r.h)}</div></div><div class="gm"><div class="gd">${esc(r.d).replace(' · ','<br>')}</div><div class="gt">${esc(r.t?shift(r.t,D.off)+' '+D.tz:'')}</div>${r.b?`<div class="pill">${esc(r.b)}</div>`:''}</div><div class="gk">${crest(r.al||getL(r.a),r.a)}<div class="gn">${esc(r.a)}</div></div></div>`;
const ini=n=>{const w=String(n||'').trim().split(/[\s-]+/).filter(Boolean);return(w.length>1?w.map(x=>x[0]).join('').slice(0,3):(w[0]||'').slice(0,3)).toUpperCase()};
const crest=(src,n)=>src?`<img class="cr" src="${esc(src)}" alt="">`:`<div class="cr">${esc(ini(n))}</div>`;
function fit(){const st=$('#stage'),s=Math.min(1,st.clientWidth/720);P.style.transform=`scale(${s})`;st.style.height=P.offsetHeight*s+'px'}
function draw(){
 P.style.setProperty('--ac',D.acc||'#d9a93f');const lt=!D.bgimg&&lum(D.bg)>160;const lp=D.lpos==='auto'?(D.lay==='grid'?'tr':'tc'):D.lpos;P.style.setProperty('--acx',lum(D.acc)>140?'#111':'#fff');P.style.color=lt?'#141414':'#fff';P.style.setProperty('--cd',lt?'rgba(0,0,0,.07)':'rgba(255,255,255,.08)');const f=+D.fmt;P.style.minHeight=f?720*f+'px':'';P.style.display=f?'flex':'';P.style.flexDirection='column';P.style.justifyContent='center';P.style.background=D.bgimg?`linear-gradient(rgba(0,0,0,${D.dim/100}),rgba(0,0,0,${D.dim/100})),url("${bgsrc()}") center/cover`:(lt?D.bg:(D.lay==='grid'?`${streaks(D.acc)},${D.bg}`:`radial-gradient(ellipse at 50% 0,rgba(255,255,255,.1),rgba(0,0,0,.4) 90%),${D.bg}`));
 P.innerHTML=`<div class="side">${esc(D.side)}</div><div class="side rt">${esc(D.side)}</div>${HD(lp)}<h1>${esc(D.title)}${D.sub?`<br><span style="color:var(--ac)">${esc(D.sub)}</span>`:''}</h1><div class="date">${esc(D.date)}</div><div class="${D.lay==='grid'?'gr':'rows'}">`
 +D.rows.map(r=>D.lay==='grid'?GC(r):`<div class="r" style="background:linear-gradient(100deg,${esc(r.k1)} 0%,${esc(r.k1)} 47%,${esc(r.k2)} 53%,${esc(r.k2)} 100%)">${crest(r.hl||getL(r.h),r.h)}<div><div class="t">${esc(r.h)}</div><div class="s">${esc([r.d,r.t?shift(r.t,D.off)+' '+D.tz:''].filter(Boolean).join(' · '))}</div></div>${r.cl||getL(r.c)?`<img class="cr c" src="${esc(r.cl||getL(r.c))}" alt="">`:`<div class="cr c">${esc(r.c)}</div>`}<div class="a"><div class="t">${esc(r.a)}</div><div class="s">${esc(r.b)}</div></div>${crest(r.al||getL(r.a),r.a)}</div>`).join('')
 +`</div>${ZN()}`;
 fit();
 try{localStorage.setItem('affiche-matchs2',JSON.stringify(D))}catch(e){}
}
function build(){
 $('#rows').innerHTML=D.rows.map((r,i)=>`<div class="card" data-i="${i}">
 <div class="g"><div><label>Domicile</label><input data-k="h" value="${esc(r.h)}"></div><div><label>Extérieur</label><input data-k="a" value="${esc(r.a)}"></div></div>
 <div class="g"><div><label>Jour</label><input data-k="d" value="${esc(r.d)}"></div><div><label>Heure</label><input data-k="t" value="${esc(r.t)}"></div></div>
 <div class="g"><div><label>Compétition (court)</label><input data-k="c" value="${esc(r.c)}"></div><div><label>Chaîne TV</label><input data-k="b" value="${esc(r.b)}"></div></div>
 <div class="g"><div><label>Couleur dom.</label><input type="color" data-k="k1" value="${esc(r.k1)}"></div><div><label>Couleur ext.</label><input type="color" data-k="k2" value="${esc(r.k2)}"></div></div>
 <div class="ups"><div><label>Logo dom.</label><input type="file" accept="image/*" data-l="hl"></div><div><label>Logo ext.</label><input type="file" accept="image/*" data-l="al"></div><div><label>Logo compét.</label><input type="file" accept="image/*" data-l="cl"></div></div>
 <div class="bt"><button data-m="up">Monter</button><button data-m="dn">Descendre</button><button data-m="dup">Dupliquer</button><button data-m="del">Supprimer</button></div></div>`).join('');
 document.querySelectorAll('[data-g]').forEach(e=>e.value=D[e.dataset.g]);
}
document.addEventListener('input',e=>{
 const g=e.target.dataset.g,k=e.target.dataset.k;
 if(g){D[g]=e.target.value;draw()}
 else if(k){const cd=e.target.closest('.card'),r=D.rows[cd.dataset.i];r[k]=e.target.value;if(k==='h'||k==='a'){const q=k==='h'?'k1':'k2';r[q]=tcol(e.target.value);cd.querySelector('[data-k="'+q+'"]').value=r[q]}draw()}
});
document.addEventListener('change',e=>{
 const l=e.target.dataset.l,f=e.target.files&&e.target.files[0];if(!l||!f)return;
 const i=e.target.closest('.card').dataset.i,fr=new FileReader();
 fr.onload=()=>{const im=new Image();im.onload=()=>{
  const k=Math.min(1,160/Math.max(im.width,im.height)),c=document.createElement('canvas');
  c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);
  if(+D.rmbg)rmbg(c);const u=c.toDataURL('image/png');D.rows[i][l]=u;const tn=l==='hl'?D.rows[i].h:l==='al'?D.rows[i].a:D.rows[i].c;if(nm(tn).length>1){L[nm(tn)]=u;sv()}draw()};im.src=fr.result};
 fr.readAsDataURL(f);
});
$('#rows').addEventListener('click',e=>{
 const m=e.target.dataset.m;if(!m)return;const i=+e.target.closest('.card').dataset.i;
 if(m==='del')D.rows.splice(i,1);
 if(m==='up'&&i>0)D.rows.splice(i-1,0,D.rows.splice(i,1)[0]);if(m==='dn'&&i<D.rows.length-1)D.rows.splice(i+1,0,D.rows.splice(i,1)[0]);if(m==='dup')D.rows.splice(i+1,0,{...D.rows[i]});
 build();draw();
});
$('#add').onclick=()=>{D.rows.push({h:'',a:'',d:'',t:'',b:'',c:'',k1:'#5a1016',k2:'#5a1016'});build();draw()};
$('#reset').onclick=()=>{D=JSON.parse(JSON.stringify(EX));D.rows.forEach(autoc);build();draw()};
$('#logoIn').onchange=e=>{const f=e.target.files[0];if(f)shrink(f,420,'image/png',u=>{D.logo=u;draw()},1)};
let dr=null;
P.addEventListener('pointerdown',e=>{const el=e.target.closest('[data-d]');if(!el)return;e.preventDefault();const q=el.dataset.d;dr={q,x:e.clientX,y:e.clientY,lx:+D[q+'x']||0,ly:+D[q+'y']||0,k:P.getBoundingClientRect().width/720,el};el.setPointerCapture&&el.setPointerCapture(e.pointerId)});
addEventListener('pointermove',e=>{if(!dr)return;const q=dr.q;D[q+'x']=Math.round(dr.lx+(e.clientX-dr.x)/dr.k);D[q+'y']=Math.round(dr.ly+(e.clientY-dr.y)/dr.k);dr.el.style.transform=`${dr.el.dataset.p||''}translate(${D[q+'x']}px,${D[q+'y']}px)${dr.el.dataset.s||''}`});
addEventListener('pointerup',()=>{if(!dr)return;dr=null;document.querySelectorAll('[data-g=lx],[data-g=ly],[data-g=bx],[data-g=by],[data-g=px],[data-g=py]').forEach(i=>i.value=D[i.dataset.g]);draw()});
$('#prst').onclick=()=>{D.px=0;D.py=0;document.querySelectorAll('[data-g=px],[data-g=py]').forEach(i=>i.value=0);draw()};
$('#brst').onclick=()=>{D.bx=0;D.by=0;document.querySelectorAll('[data-g=bx],[data-g=by]').forEach(i=>i.value=0);draw()};
$('#lrst').onclick=()=>{D.lx=0;D.ly=0;document.querySelectorAll('[data-g=lx],[data-g=ly]').forEach(i=>i.value=0);draw()};
$('#brandIn').onchange=e=>{const f=e.target.files[0];if(f)shrink(f,420,'image/png',u=>{D.brandimg=u;draw()},1)};
$('#brandDel').onclick=()=>{D.brandimg='';$('#brandIn').value='';draw()};
$('#logoDel').onclick=()=>{D.logo='';$('#logoIn').value='';draw()};
$('#bgIn').onchange=e=>{const f=e.target.files[0];if(f)shrink(f,1600,'image/jpeg',u=>{D.bgimg=u;draw()})};
$('#bgDel').onclick=()=>{D.bgimg='';$('#bgIn').value='';draw()};
$('#logosIn').onchange=e=>{[...e.target.files].forEach(f=>shrink(f,160,'image/png',u=>{L[nm(f.name.replace(/\.[^.]+$/,''))]=u;sv();draw()},1))};
const WEEK={upd:'25/11/2026',date:'Mercredi 25 – Dimanche 29 novembre 2026',m:[['Sabah','Barcelona','Mer · 25/11','17:45','LDC'],['Club Brugge','Liverpool','Mer · 25/11','20:00','LDC'],['Atlético Madrid','Viking','Mer · 25/11','20:00','LDC'],['Lille','Bayern Munich','Mer · 25/11','20:00','LDC'],['Hamburger SV','Bayern Munich','Sam · 28/11','14:30','BL'],['Borussia Dortmund','Bayer Leverkusen','Sam · 28/11','14:30','BL'],['Manchester United','Brentford','Sam · 28/11','15:00','PL'],['Everton','Liverpool','Dim · 29/11','12:00','PL'],['Real Madrid','Alavés','Dim · 29/11','16:00','LL'],['Arsenal','Manchester City','Dim · 29/11','16:30','PL']]};
function loadWeek(){D.rows=WEEK.m.map(a=>{const r={h:a[0],a:a[1],d:a[2],t:a[3],c:a[4],b:''};autoc(r);return r});D.date=WEEK.date;build();draw();$('#msg').textContent='Matchs de la semaine chargés (liste du '+WEEK.upd+').'}
$('#impBtn').onclick=()=>{if(!$('#imp').value.trim()){loadWeek();return}const rows=$('#imp').value.split('\n').map(l=>l.trim()).filter(Boolean).map(l=>{const p=l.split('|').map(x=>x.trim()),m=p[0].split(/\s+(?:-|–|vs|v)\s+/i);const r={h:m[0]||'',a:m[1]||'',d:p[1]||'',t:p[2]||'',c:p[3]||'',b:p[4]||''};autoc(r);return r});if(rows.length){D.rows=rows;build();draw()}};
$('#dl').onclick=async()=>{
 const b=$('#dl'),m=$('#msg');b.disabled=true;b.textContent='Création de l’image…';m.textContent='';
 try{
  if(typeof html2canvas!=='function')throw new Error('Outil d’export non chargé. Rechargez la page.');
  P.style.transform='none';
  const c=await html2canvas(P,{scale:1.5,backgroundColor:null,useCORS:true});
  fit();
  $('#out').src=c.toDataURL('image/png');$('#outw').hidden=false;
  const blob=await new Promise(r=>c.toBlob(r,'image/png'));
  let dl=null;try{dl=await claude.use('downloads')}catch(e){}
  if(dl){await dl.save({filename:'affiche-matchs.png',data:blob});m.textContent='Affiche enregistrée.'}
  else{const a=document.createElement('a');a.href=$('#out').src;a.download='affiche-matchs.png';document.body.appendChild(a);a.click();a.remove();m.textContent='Image téléchargée.'}
 }catch(e){fit();m.textContent=(e&&e.code==='declined')?'Téléchargement annulé.':'Export impossible : '+((e&&e.message)||'erreur')}
 b.disabled=false;b.textContent='Télécharger en PNG';
};
const PRE={we:['Samedi 28 – Dimanche 29 novembre 2026','Programme foot','Hamburger SV - Bayern Munich | Sam | 14:30 | BL\nBorussia Dortmund - Bayer Leverkusen | Sam | 14:30 | BL\nManchester United - Brentford | Sam | 15:00 | PL\nEverton - Liverpool | Dim | 12:00 | PL\nReal Madrid - Alavés | Dim | 16:00 | LL\nArsenal - Manchester City | Dim | 16:30 | PL'],cl:['Mercredi 25 novembre 2026','Ligue des champions','Sabah - Barcelona | Mer | 17:45 | LDC\nClub Brugge - Liverpool | Mer | 20:00 | LDC\nAtlético Madrid - Viking | Mer | 20:00 | LDC\nLille - Bayern Munich | Mer | 20:00 | LDC']};
function pre(k){$('#imp').value=PRE[k][2];$('#impBtn').click();D.date=PRE[k][0];D.title=PRE[k][1];document.querySelector('[data-g="date"]').value=D.date;document.querySelector('[data-g="title"]').value=D.title;draw()}
$('#pWe').onclick=()=>pre('we');$('#pCl').onclick=()=>pre('cl');$('#pGr').onclick=()=>{Object.assign(D,{lay:'grid',acc:'#2ee86b',bg:'#04120d'});build();draw()};
const DY=['lun','mar','mer','jeu','ven','sam','dim'],key=r=>{const d=DY.indexOf(String(r.d).slice(0,3).toLowerCase()),m=/(\d+):(\d+)/.exec(r.t||'');return(d<0?9:d)*2000+(m?+m[1]*60+ +m[2]:1999)};
$('#srt').onclick=()=>{D.rows.sort((a,b)=>key(a)-key(b));build();draw()};
$('#bk').onclick=async()=>{const m=$('#msg');try{const bl=new Blob([JSON.stringify({D,L},null,2)],{type:'application/json'});const u=URL.createObjectURL(bl),a=document.createElement('a');a.href=u;a.download='affiche-sauvegarde.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1500);m.textContent='Sauvegarde téléchargée.'}catch(e){m.textContent=(e&&e.code==='declined')?'Sauvegarde annulée.':'Sauvegarde impossible : '+((e&&e.message)||'erreur')}};
$('#rs').onchange=e=>{const f=e.target.files[0];if(!f)return;f.text().then(t=>{const o=JSON.parse(t);D=Object.assign(JSON.parse(JSON.stringify(EX)),o.D);D.rows.forEach(r=>{if(!r.k1||!r.k2)autoc(r)});L=o.L||{};sv();build();draw();$('#msg').textContent='Sauvegarde restaurée.'}).catch(()=>{$('#msg').textContent='Fichier de sauvegarde invalide.'})};
function HD(lp){const pf=p=>p==='tc'?'translate(-50%,0) ':'',pc=p=>p==='tc'?'left:50%;top:0;':p==='tr'?'right:-14px;top:-4px;':'left:-14px;top:-4px;',lh=+D.lsz||80,bp=D.bpos==='auto'?'tc':D.bpos,top=D.bpos==='auto'&&D.logo&&lp==='tc'?`top:${lh+6}px;`:'';let h='';
if(D.logo)h+=`<img data-d="l" data-p="${pf(lp)}" class="blogo" src="${esc(D.logo)}" alt="" style="${pc(lp)}height:${lh}px;transform:${pf(lp)}translate(${+D.lx||0}px,${+D.ly||0}px)">`;
if(D.brandimg){const pp=D.ppos==='auto'?'tl':D.ppos;h+=`<img data-d="p" data-p="${pf(pp)}" class="bimg" src="${esc(D.brandimg)}" alt="" style="${pc(pp)}height:${+D.psz||80}px;transform:${pf(pp)}translate(${+D.px||0}px,${+D.py||0}px)">`}
if(String(D.brand).trim()){const k=(+D.bsz||60)/60;h+=`<div data-d="b" data-p="${pf(bp)}" data-s=" scale(${k})" class="brand" style="${pc(bp)}${top}transform:${pf(bp)}translate(${+D.bx||0}px,${+D.by||0}px) scale(${k})">${esc(D.brand)}</div>`}
return `<div class="hd" style="height:${+D.hh||0}px">${h}</div>`}
const WA='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#25D366"/><path d="M12 5.2a6.8 6.8 0 0 0-5.8 10.3L5.3 19l3.6-.9A6.8 6.8 0 1 0 12 5.2z" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M9.6 9c.2-.4.5-.4.7-.4l.5.1.7 1.5-.5.8c.5 1 1.3 1.7 2.3 2.2l.7-.6 1.5.7c0 .4-.1 1-.7 1.3-.8.4-2.3.2-3.9-1.2-1.6-1.4-2.4-3.2-1.7-4.4z" fill="#fff"/></svg>';
const CL='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1d6fe0"/><g transform="translate(4.8 4.8) scale(.6)"><path fill="#fff" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></g></svg>';
const ZN=()=>{const c=(D.foot||D.wa||D.tel)?`<div class="zn">${D.foot?`<div class="ft">${esc(D.foot)}</div>`:''}${(D.wa||D.tel)?`<div class="cts">${D.wa?`<div class="ct">${WA}<span>${esc(D.wa)}</span></div>`:''}${D.tel?`<div class="ct">${CL}<span>${esc(D.tel)}</span></div>`:''}</div>`:''}</div>`:'',p=D.code?`<div class="zn pc"><div><span class="pcc">${esc(D.code)}</span></div>${D.codeTxt?`<div class="pct">${esc(D.codeTxt)}</div>`:''}</div>`:'';return c||p?`<div class="fz">${c}${p}</div>`:''};
const BC={};
function bgsrc(){const b=+D.blur||0;if(!D.bgimg||!b)return D.bgimg;const k=D.bgimg.length+'|'+b;if(BC[k])return BC[k];if(!BC.p){BC.p=1;const im=new Image();im.onload=()=>{const w=im.width,h=im.height,o=document.createElement('canvas'),r=b*w/720,p=Math.ceil(r*2);o.width=w;o.height=h;const x=o.getContext('2d');if('filter' in x){x.filter=`blur(${r}px)`;x.drawImage(im,-p,-p,w+2*p,h+2*p)}else{const s=1/(1+b),c=document.createElement('canvas');c.width=Math.max(2,Math.round(w*s));c.height=Math.max(2,Math.round(h*s));c.getContext('2d').drawImage(im,0,0,c.width,c.height);x.imageSmoothingQuality='high';x.drawImage(c,0,0,w,h)}BC[k]=o.toDataURL('image/jpeg',.85);BC.p=0;draw()};im.src=D.bgimg}return D.bgimg}
const ac=(h,a)=>{const m=/^#(..)(..)(..)$/.exec(h||'');return m?`rgba(${parseInt(m[1],16)},${parseInt(m[2],16)},${parseInt(m[3],16)},${a})`:`rgba(255,255,255,${a})`};
const streaks=h=>`linear-gradient(118deg,transparent 14%,${ac(h,.45)} 14.2%,${ac(h,.45)} 14.6%,transparent 15%),linear-gradient(118deg,transparent 78%,${ac(h,.3)} 78.2%,${ac(h,.3)} 78.5%,transparent 78.8%),radial-gradient(circle at 0 100%,${ac(h,.3)},transparent 42%),radial-gradient(circle at 100% 0,${ac(h,.22)},transparent 38%)`;
const lum=h=>{const m=/^#(..)(..)(..)$/.exec(h||'');return m?.299*parseInt(m[1],16)+.587*parseInt(m[2],16)+.114*parseInt(m[3],16):0};
const cn=h=>{const m=/^#(..)(..)(..)$/.exec(h||'');if(!m)return'accent color';const[r,g,b]=m.slice(1).map(x=>parseInt(x,16)/255),mx=Math.max(r,g,b),d=mx-Math.min(r,g,b);if(d<.12){const l=(r+g+b)/3;return(l>.7?'white':l<.25?'black':'gray')+' ('+h+')'}let H=mx===r?((g-b)/d)%6:mx===g?(b-r)/d+2:(r-g)/d+4;H=(H*60+360)%360;const k=H<15||H>=345?'red':H<32?'orange':H<65?'gold':H<160?'green':H<200?'cyan':H<260?'blue':H<300?'purple':'pink';return k+' ('+h+')'};
function genPrompt(){const g=D.lay==='grid',n=D.rows.length,lm=lum(D.bg),bgw=lm>160?'Light':lm<70?'Very dark':'Dark',tx=lm>160?'near-black':'white',an=cn(D.acc),t=r=>r.t?shift(r.t,D.off)+' '+D.tz:'';
const title=`"${D.title}"${D.sub?` and below it "${D.sub}"`:''}`,foot=D.foot?`FOOTER: a white rounded pill with the text "${D.foot}".`:'';
const sty=`STYLE: clean flat graphic design, high contrast, ${an} accent on a ${bgw.toLowerCase()} background, bold uppercase typography, perfect alignment and spacing, crisp sharp text, professional social media sports graphic.`;
if(g)return [`Vertical football fixtures poster, 4:5 ratio, modern sports media style. ${bgw} background (${D.bg}) with subtle ${an} diagonal light streaks and soft glow on the edges.`,`TITLE, centered at the top: ${title} in bold ${tx} uppercase sans-serif (second line in ${an}, slightly larger). Under it, small light text "${D.date}".`,`GRID: ${n} dark grey rounded semi-transparent cards in 2 columns and ${Math.ceil(n/2)} rows, even spacing. Each card, left to right: an empty round club badge placeholder with the small home team name below it, a centered text block with the weekday, the kick-off time in large bold ${tx} and, when given, a small white rounded pill with the TV channel, then an empty round club badge placeholder with the small away team name below it.`,D.rows.map((r,i)=>`CARD ${i+1}: "${r.d}", "${t(r)}", teams "${r.h}" and "${r.a}"${r.b?`, pill "${r.b}"`:''}`).join('\n'),foot,sty].filter(Boolean).join('\n\n');
return [`Vertical football schedule poster, 4:5 ratio, broadcast style. ${bgw} background (${D.bg}) with subtle ${an} glow.`,`TOP: a curved logo plate with a thin ${an} frame and the text "${D.brand.trim()}". Below it the huge title ${title} in bold ${tx} condensed uppercase sans-serif, then small text "${D.date}".`,`ROWS: ${n} horizontal match bands stacked vertically, each split diagonally between the two teams' jersey colors (home color left, away color right), with empty round club badge placeholders at both ends, team names in bold uppercase, the kick-off time under the home team, and a small round competition badge in the center.`,D.rows.map((r,i)=>`ROW ${i+1}: "${r.h}" (home color ${r.k1}) vs "${r.a}" (away color ${r.k2}), "${[r.d,t(r)].filter(Boolean).join(' ')}"${r.c?`, competition "${r.c}"`:''}${r.b?`, channel "${r.b}"`:''}`).join('\n'),foot,sty].filter(Boolean).join('\n\n')}
$('#prGen').onclick=()=>{$('#pr').value=genPrompt()};
$('#prCp').onclick=async()=>{const t=$('#pr'),m=$('#msg');try{await navigator.clipboard.writeText(t.value);m.textContent='Prompt copié.'}catch(e){t.select();try{document.execCommand('copy');m.textContent='Prompt copié.'}catch(e2){m.textContent='Sélectionnez le texte pour le copier.'}}};
$('#pr').value=genPrompt();
addEventListener('resize',fit);
document.fonts&&document.fonts.ready.then(fit);
build();draw();

/* Améliorations de robustesse et d'accessibilité */
(function enhanceEditor() {
  const status = document.querySelector('#msg');
  const announce = (message) => {
    if (status) status.textContent = message;
  };

  // Donne un libellé accessible aux contrôles dont le texte visuel est déjà présent.
  document.querySelectorAll('input, select, textarea').forEach((field, index) => {
    if (!field.id) field.id = `editor-field-${index + 1}`;
    const label = field.closest('div')?.querySelector(':scope > label');
    if (label && !label.htmlFor) label.htmlFor = field.id;
  });

  // Empêche une double activation pendant une opération d'export.
  const exportButton = document.querySelector('#dl');
  if (exportButton) exportButton.setAttribute('aria-label', 'Télécharger l’affiche au format PNG');

  // Feedback de chargement des polices : l'affiche reste utilisable si Google Fonts est indisponible.
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => window.dispatchEvent(new Event('resize'))).catch(() => {});
  }

  // Signale les erreurs de stockage plutôt que de bloquer l'éditeur.
  window.addEventListener('storage', (event) => {
    if (event.key === 'affiche-matchs2' || event.key === 'affiche-logos') {
      announce('Les données ont été modifiées dans un autre onglet. Rechargez la page pour les synchroniser.');
    }
  });
})();

