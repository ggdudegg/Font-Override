(()=>{"use strict";
const ID="font-override-style",defaults={enabled:true,fontFamily:"Arial, Helvetica, sans-serif",fontSize:100},host=location.hostname;
function css(s){if(!s?.enabled)return"";const family=String(s.fontFamily||defaults.fontFamily).replace(/[;{}]/g,"");const size=Math.min(140,Math.max(80,Number(s.fontSize)||100));const playfair=family.includes("Playfair Display")?'@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap");\n':"";return playfair+`html{font-size:${size}%!important}
body,body *:not(svg):not(svg *):not([class*="icon"]):not([class*="Icon"]):not([class*="material-icons"]):not([class*="fa-"]){font-family:${family}!important}
input,textarea,select,button{font-family:${family}!important}`}
function apply(s){let style=document.getElementById(ID);if(!style){style=document.createElement("style");style.id=ID;const attach=()=>{const root=document.documentElement||document.head;if(root&&!document.getElementById(ID)){root.appendChild(style);return true}return false};if(!attach()){const observer=new MutationObserver(()=>{if(attach())observer.disconnect()});observer.observe(document,{childList:true,subtree:true})}}style.textContent=css(s)}
async function refresh(){try{const d=await browser.storage.local.get(["globalSettings","siteSettings"]);apply({...defaults,...(d.globalSettings||{}),...(d.siteSettings?.[host]||{})})}catch{}}
refresh();browser.storage.onChanged.addListener((changes,area)=>{if(area==="local"&&(changes.globalSettings||changes.siteSettings))refresh()});
})();