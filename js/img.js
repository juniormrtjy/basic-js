function inSection() {
  let a = document.querySelector('section')
  return (a.innerHTML = `<div class="effect">
  <img
    src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    alt=""
  />
</div>
<div class="effect">
  <img
    src="https://images.unsplash.com/photo-1433048980017-63f162f662b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    alt=""
  />
</div>
<div class="effect">
  <img
    src="https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    alt=""
  />
</div>`)
}
inSection()
