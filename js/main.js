document.documentElement.classList.add('js');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('details').forEach(detail=>detail.addEventListener('toggle',()=>{const marker=detail.querySelector('summary span');if(marker)marker.textContent=detail.open?'−':'+'}));
const orbit=document.querySelector('.hero-orbit');
if(orbit&&matchMedia('(pointer: fine)').matches){addEventListener('pointermove',event=>{orbit.style.setProperty('--mx',((event.clientX/innerWidth-.5)*10)+'px');orbit.style.setProperty('--my',((event.clientY/innerHeight-.5)*10)+'px')},{passive:true})}

const careerPaths={
all:['CAREER ARC','From JavaScript SDKs and catalog ingestion to ranking systems, Amazon data planes, robotic perception, EKS control planes, and software-engineering agents.'],
search:['SEARCH','Query processing, ranking, recommendation, pagination, RAG, and retrieval policy—eleven years of making the right information arrive at the right time.'],
ml:['MACHINE LEARNING','Production NER, learning-to-rank, recommendations, multimodal representation learning, robotic perception, TTS fine-tuning, and continuous-learning pipelines.'],
systems:['DISTRIBUTED SYSTEMS','Catalog pipelines, streaming snapshots, Amazon data planes, EKS cell architecture, petabyte-scale telemetry, and high-throughput document enrichment.'],
robotics:['ROBOTICS','Near-real-time package state, fulfillment-center matching and perception, and the continuous-learning infrastructure connecting models to physical operations.'],
agents:['AGENT PLATFORMS','Research, planning, human approval, coding, review, evaluation, tracing, recovery, and reusable memory coordinated as observable production loops.']
};
const careerStory=document.querySelector('.career-story');
document.querySelectorAll('.map-node').forEach(node=>node.addEventListener('click',()=>{
  const key=node.dataset.path;
  document.querySelectorAll('.map-node').forEach(item=>item.classList.toggle('active',item===node));
  document.querySelectorAll('.role').forEach(role=>role.classList.toggle('filtered',key!=='all'&&!role.dataset.tags.split(' ').includes(key)));
  careerStory.querySelector('span').textContent=careerPaths[key][0];
  careerStory.querySelector('p').textContent=careerPaths[key][1];
  careerStory.classList.remove('pulse');void careerStory.offsetWidth;careerStory.classList.add('pulse');
}));
