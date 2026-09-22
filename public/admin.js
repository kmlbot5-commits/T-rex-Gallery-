// DEMO admin screen.
// IMPORTANT: This is only the UI starter. Real security must be enforced by a server/database
// (e.g. Firebase Authentication + Storage/Firestore), not by frontend code alone.
const login=document.querySelector("#login");
const panel=document.querySelector("#panel");
const loginMsg=document.querySelector("#loginMsg");
const upload=document.querySelector("#upload");
const logout=document.querySelector("#logout");
const file=document.querySelector("#file");
const caption=document.querySelector("#caption");
const msg=document.querySelector("#msg");

login.onclick=()=>{
  loginMsg.textContent="Demo mode: connect Firebase Authentication before using this publicly.";
  panel.classList.remove("hidden");
};
logout.onclick=()=>panel.classList.add("hidden");
upload.onclick=()=>{
  if(!file.files[0]) return msg.textContent="សូមជ្រើសរូបភាពជាមុនសិន។";
  msg.textContent="Demo only — Firebase Storage ត្រូវភ្ជាប់សម្រាប់ Upload ពិតប្រាកដ។";
};