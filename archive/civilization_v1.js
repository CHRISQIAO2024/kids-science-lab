window.MUSEUM_EXPERIMENTS={"浮力": "demos/physics/06-wave-interference.html", "欧姆": "demos/physics/08-lorentz-force.html", "开普勒": "demos/physics/05-total-internal-reflection.html", "自由落体": "demos/physics/01-projectile-independence.html", "机械能": "demos/physics/02-kepler-second-law.html", "干涉": "demos/physics/07-electromagnetic-induction.html"};
'use strict';
const sections=[...document.querySelectorAll('.civ-section')];
const cards=[...document.querySelectorAll('.card')];
const text=(c,s)=>c.querySelector(s)?.textContent.trim()||'';
const fields=[['数学',/几何|定理|代数|微积分|极限|级数|猜想|矩阵|群论|概率|统计|计算|图灵|算法|圆周|勾股|圆锥|解析|方程求根|正多面体/],['化学与生命',/化学|元素|周期律|原电池|氧化|酸碱|青蒿|水稻|生物|医学|血液|解剖|细胞|进化|遗传|疫苗|体液/],['天文与地理',/天文|太阳|地球|行星|彗星|星表|岁差|地理|历法|日心|地心|月食|土星/],['物理与工程',/力|电|磁|光|热|熵|原子|量子|相对论|波|流体|气体|温|建筑|机械|射线|核|质子|电子|中子/]];
const records=cards.map(c=>{
 const section=c.closest('.civ-section'),name=text(c,'.card-name'),person=text(c,'.card-person-zh'),years=text(c,'.card-years');
 const y=years.match(/(前)?\s*(\d+)/);const year=y?Number(y[2])*(y[1]?-1:1):null;
 const subject=fields.find(([,r])=>r.test(name+' '+person))?.[0]||'综合与科学方法';
 const era=year===null?'年代待补':year<500?'古代 · 500年以前':year<1400?'中古 · 500—1399':year<1700?'近代早期 · 1400—1699':year<1900?'近代 · 1700—1899':'现代 · 1900年起';
 c.tabIndex=0;c.setAttribute('role','button');c.setAttribute('aria-expanded','false');
 function toggle(){c.classList.toggle('expanded');c.setAttribute('aria-expanded',String(c.classList.contains('expanded')))}
 c.addEventListener('click',e=>{if(!e.target.closest('a'))toggle()});c.addEventListener('keydown',e=>{if(e.target===c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();toggle()}});
 const formula=text(c,'.card-formula-expand');const core=document.createElement('p');core.className='card-core';core.textContent=formula||name;c.querySelector('.card-toggle').before(core);
 const content=c.querySelector('.card-expand-content');
 const status=document.createElement('p');status.className='current-status';status.textContent=/地心说|体液|运动论|燃素/.test(name)?'今天的认识：历史观点，需结合后续修正阅读':/黎曼假设/.test(name)?'今天的认识：猜想；证明状态待核验':/猜想/.test(text(c,'.card-type'))?'今天的认识：提出与后续证明需分别查阅':'今天的认识：适用条件与历史归属待核验';content.append(status);
 const note=document.createElement('p');note.className='evidence-note';note.textContent='出处：用户提供的学习资料；原始文献与可信参考来源待补。历史条目中的生平年代不等于成果发表年代。';content.append(note);
 const exp=Object.entries(window.MUSEUM_EXPERIMENTS||{}).find(([k])=>name.includes(k));
 if(exp){const a=document.createElement('a');a.href=exp[1];a.className='experiment-link';a.textContent='动手理解：进入相关实验 ↗';content.append(a)}
 return {c,section,name,person,year,era,subject,type:text(c,'.card-type'),search:c.textContent.toLowerCase()};
});
const search=document.getElementById('museum-search'),mode=document.getElementById('browse-mode'),type=document.getElementById('type-filter'),subject=document.getElementById('subject-filter'),grouped=document.getElementById('grouped-results');
function options(el,values){[...new Set(values)].sort().forEach(v=>{const o=document.createElement('option');o.value=o.textContent=v;el.append(o)})}options(type,records.map(r=>r.type));options(subject,records.map(r=>r.subject));
document.getElementById('total-count').textContent=records.length;document.getElementById('module-count').textContent=records.length;document.getElementById('footer-count').textContent=`${records.length} 条探索记录 · ${sections.length} 个文明与地区分组`;
sections.forEach(s=>{s.querySelector('.civ-count').textContent=records.filter(r=>r.section===s).length+' 条目'});
function render(){const q=search.value.trim().toLowerCase();const visible=records.filter(r=>(!q||r.search.includes(q))&&(!type.value||r.type===type.value)&&(!subject.value||r.subject===subject.value));const set=new Set(visible);records.forEach(r=>r.c.hidden=!set.has(r));grouped.replaceChildren();document.querySelector('.civ-nav').hidden=mode.value!=='region';
 if(mode.value==='region'){sections.forEach(s=>{const grid=s.querySelector('.cards-grid');records.filter(r=>r.section===s).forEach(r=>grid.append(r.c));s.hidden=!visible.some(r=>r.section===s)})}
 else{sections.forEach(s=>s.hidden=true);const map=new Map();[...visible].sort((a,b)=>(a.year??9999)-(b.year??9999)).forEach(r=>{const key=mode.value==='era'?r.era:r.subject;if(!map.has(key))map.set(key,[]);map.get(key).push(r)});if(mode.value==='subject'){const sorted=[...map].sort(([a],[b])=>a.localeCompare(b,'zh'));map.clear();sorted.forEach(([k,v])=>map.set(k,v))}map.forEach((rs,label)=>{const section=document.createElement('section');section.className='browse-group';const h=document.createElement('h2');h.className='group-title';h.textContent=label+' · '+rs.length+' 条';const grid=document.createElement('div');grid.className='cards-grid';rs.forEach(r=>grid.append(r.c));section.append(h,grid);grouped.append(section)})}
 document.getElementById('result-count').textContent=`显示 ${visible.length} / ${records.length} 条探索记录`;
}
[search,mode,type,subject].forEach(el=>el.addEventListener(el===search?'input':'change',render));document.getElementById('reset-filters').onclick=()=>{search.value='';mode.value='region';type.value='';subject.value='';render()};render();
