(function(){
const params=new URLSearchParams(location.search),theme=params.get("tema")||"05";
const root=document.getElementById("test-root"),resetBtn=document.getElementById("reset-btn");
const script=document.createElement("script");script.src=`temas/tema${theme}.js`;script.onload=init;
script.onerror=()=>root.innerHTML=`<div class="card"><h2>Tema no disponible</h2><p>No se ha encontrado el archivo del Tema ${theme}.</p></div>`;
document.head.appendChild(script);

function init(){
 if(!window.TEST_THEME||!Array.isArray(TEST_THEME.questions)){root.innerHTML=`<div class="card"><h2>Error de carga</h2></div>`;return}
 const bank=TEST_THEME.questions;let state=TestProgress.get(theme);
 if(!state||state.total!==bank.length) state={total:bank.length,queue:shuffle(bank.map((_,i)=>i)),mastered:[],fails:0,attempts:0};
 let mastered=new Set(state.mastered||[]),queue=Array.isArray(state.queue)?state.queue.slice():[],current=null,locked=false;
 function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
 function save(){state.queue=queue;state.mastered=[...mastered];TestProgress.set(theme,state)}
 resetBtn.onclick=()=>{if(confirm("¿Reiniciar completamente el progreso de este tema?")){TestProgress.clear(theme);location.reload()}};
 function statsHTML(){return `<div class="stats"><span class="pill">Pendientes: ${bank.length-mastered.size}/${bank.length}</span><span class="pill">Dominadas: ${mastered.size}</span><span class="pill">Fallos: ${state.fails}</span></div>`}
 function render(){
  if(mastered.size===bank.length){save();root.innerHTML=`<div class="test-head"><div><h1>${TEST_THEME.title}</h1><div class="subtitle">${TEST_THEME.subtitle}</div></div>${statsHTML()}</div><div class="progress"><div class="bar" style="width:100%"></div></div><div class="card end"><h2>✅ Tema completado</h2><p>Has contestado correctamente las ${bank.length} preguntas. Ninguna pregunta fallada ha quedado sin recuperar.</p><p><b>Intentos:</b> ${state.attempts} · <b>Fallos:</b> ${state.fails}</p></div>`;return}
  queue=queue.filter(i=>!mastered.has(i));if(!queue.length)queue=shuffle(bank.map((_,i)=>i).filter(i=>!mastered.has(i)));
  current=queue.shift();locked=false;save();const x=bank[current],bc=x.tag==="TRAMPA"?"trampa":"clave",bt=x.tag==="TRAMPA"?"⚠ TRAMPA DEL TRIBUNAL":"★ DATO CLAVE";
  root.innerHTML=`<div class="test-head"><div><h1>${TEST_THEME.title}</h1><div class="subtitle">${TEST_THEME.subtitle}</div></div>${statsHTML()}</div><div class="progress"><div class="bar" style="width:${mastered.size/bank.length*100}%"></div></div><div class="card"><div class="meta"><span class="badge ${bc}">${bt}</span><span class="small">Cola dinámica · ${mastered.size+1}/${bank.length}</span></div><div class="question">${x.q}</div><div class="options">${x.o.map((t,i)=>`<button class="option" data-i="${i}"><b>${String.fromCharCode(65+i)}.</b> ${t}</button>`).join("")}</div><div id="feedback" class="feedback"></div><div id="actions" class="actions" style="display:none"><button class="action-btn" id="next-btn">Siguiente</button><button class="action-btn secondary" id="rule-btn">Ver regla de repetición</button></div></div>`;
  document.querySelectorAll(".option").forEach(b=>b.onclick=()=>answer(Number(b.dataset.i),b));
  document.getElementById("next-btn").onclick=render;
  document.getElementById("rule-btn").onclick=()=>alert("Las acertadas quedan dominadas. Cada pregunta fallada vuelve al final de la cola. Si vuelve a fallarse, vuelve a entrar. El tema solo termina cuando todas han sido acertadas.");
 }
 function answer(i,btn){
  if(locked)return;locked=true;state.attempts++;const x=bank[current],buttons=[...document.querySelectorAll(".option")];buttons.forEach(b=>b.disabled=true);buttons[x.a].classList.add("correct");const fb=document.getElementById("feedback");
  if(i===x.a){mastered.add(current);fb.className="feedback good";fb.innerHTML=`<b>✅ Correcta.</b><br>${x.e}<div class="reference">Referencia: ${x.src}</div>`}
  else{state.fails++;btn.classList.add("wrong");queue.push(current);fb.className="feedback bad";fb.innerHTML=`<b>❌ Incorrecta.</b> La correcta es <b>${String.fromCharCode(65+x.a)}. ${x.o[x.a]}</b>.<br><br>${x.e}<div class="reference">Referencia: ${x.src}</div><div class="reference"><b>Esta pregunta volverá al final de la cola.</b></div>`}
  document.getElementById("actions").style.display="flex";save();
 }
 render()
}
})();
