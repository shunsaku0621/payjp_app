const pay = () => {
  Payjp.setPublicKey(process.env.PAYJP_PUBLIC_KEY); 
  const submit = document.getElementById("button");
  submit.addEventListener("click", (e) => { // イベント発火
    e.preventDefault();
  });
};