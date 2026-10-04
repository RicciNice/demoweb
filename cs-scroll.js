(function(){
var rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
var hbg=document.getElementById("hv"),hcon=document.querySelector(".hcon"),cue=document.querySelector(".scrollcue"),hero=document.querySelector(".hero"),tk=false;
function par(){var y=scrollY,h=hero.offsetHeight;tk=false;if(y>h)return;
 if(hbg)hbg.style.transform="translate3d(0,"+(y*.3)+"px,0) scale(1.12)";
 hcon.style.transform="translate3d(0,"+(y*.18)+"px,0)";
 var o=Math.max(0,1-y/(h*.6));hcon.style.opacity=o;if(cue)cue.style.opacity=o}
if(!rm){addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(par)}},{passive:true});par();
 document.querySelectorAll(".row,.mp-row").forEach(function(r){[].forEach.call(r.children,function(c,i){c.style.transitionDelay=(i*130)+"ms";c.addEventListener("transitionend",function(){c.style.transitionDelay=""},{once:true})})})}
var S=[["top","Home"],["about","Leadership"],["academy","Academy"],["coaches","Coaches"],["videos","Highlights"],["players","Players"],["sponsors","Partners"],["contact","Contact"]];
var d=document.createElement("nav");d.className="dots";d.setAttribute("aria-label","Sections");
S.forEach(function(s){var a=document.createElement("a");a.href="#"+s[0];a.title=s[1];a.setAttribute("aria-label",s[1]);d.appendChild(a)});
document.body.appendChild(d);var L=d.children;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=S.findIndex(function(s){return s[0]===e.target.id});[].forEach.call(L,function(a,j){a.classList.toggle("on",j===i)})}})},{rootMargin:"-45% 0px -45% 0px"});
S.forEach(function(s){var el=document.getElementById(s[0]);if(s[0]==="top")el=hero;if(el)io.observe(el)});
S[0][0]==="top"&&hero&&(hero.id=hero.id||"");
})();
