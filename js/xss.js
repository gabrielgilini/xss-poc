(async function() {
  const nonce = await fetch('/my-nonce').then(res => res.text());
  alert(`My nonce is ${nonce}`);
})();