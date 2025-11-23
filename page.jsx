export default function Home() {
  const send = async () => {
    const msg = document.getElementById("msg").value;
    const r = await fetch("/api/chat", {method:"POST", body: JSON.stringify({message: msg})});
    const j = await r.json();
    document.getElementById("reply").innerText = j.reply;
  };
  return (
    <main style={{padding:20}}>
      <h1>Haru Chat</h1>
      <input id="msg" placeholder="輸入訊息" style={{width:"80%"}} />
      <button onClick={send}>送出</button>
      <pre id="reply"></pre>
    </main>
  );
}
