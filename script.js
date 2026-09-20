function toggleMenu(){
  const m=document.getElementById("mobileMenu");
  m.style.display = m.style.display==="block" ? "none" : "block";
}
function focusSearch(){
  const box=document.getElementById("searchBox");
  box.hidden=false;
  document.getElementById("searchInput").focus();
}
function closeSearch(){document.getElementById("searchBox").hidden=true;}
function searchSite(){
  const q=document.getElementById("searchInput").value.trim().toLowerCase();
  const hint=document.getElementById("searchHint");
  if(!q){hint.textContent="Search feature ready — articles और topics के लिए उपयोग करें.";return;}
  const known=["gdp","बेरोजगारी","महंगाई","inflation","economy","finance","upi","banking","investment"];
  const found=known.some(k=>q.includes(k));
  hint.textContent=found ? "इस topic से जुड़ा Analysis उपलब्ध है — Analysis section देखें।" : "इस topic पर नए articles जल्द जोड़े जाएंगे।";
}
document.addEventListener("click",e=>{
  const box=document.getElementById("searchBox");
  if(!box.hidden && !box.contains(e.target) && !e.target.closest(".icon-btn")) closeSearch();
});
