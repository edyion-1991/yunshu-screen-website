const tabs=[...document.querySelectorAll('[data-tab]')];
function selectTab(tab){tabs.forEach(button=>{const active=button===tab;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;document.getElementById(button.dataset.tab).hidden=!active;});}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;selectTab(tabs[next]);tabs[next].focus();}});});
const status=document.getElementById('download-status');
document.querySelectorAll('[data-download]').forEach(link=>link.addEventListener('click',()=>{status.textContent='正在前往 GitHub 下载安装包。下载后运行安装程序即可。';}));
document.getElementById('copy-hash').addEventListener('click',async event=>{const button=event.currentTarget;try{await navigator.clipboard.writeText(document.getElementById('hash').textContent);button.textContent='已复制';}catch{status.textContent='请选中校验值手动复制。';}});
