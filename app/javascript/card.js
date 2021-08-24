const pay = () => {
  Payjp.setPublicKey(process.env.PAYJP_PUBLIC_KEY); 
  const submit = document.getElementById("button");
  submit.addEventListener("click", (e) => { // イベント発火
    e.preventDefault();
     // カード情報の取得先
     const formResult = document.getElementById("charge-form");
     const formData = new FormData(formResult);
 
     const card = { // カードオブジェクトを生成
       number: formData.get("number"),              // カード番号
       cvc: formData.get("cvc"),                    // カード裏面の3桁の数字
       exp_month: formData.get("exp_month"),        // 有効期限の月
       exp_year: `20${formData.get("exp_year")}`,   // 有効期限の年
     };
  });
};