fetch("/data.json").then(function (response) {
  return response.json();
})

.then(function(data){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let x of data){
        out += `<div class="dataname">${x.name}</div>`;
    }
    placeholder,innerHTML = out;
})