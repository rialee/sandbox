$(document).ready(()=>{$("[data-toggle=\"tooltip\"]").tooltip();}),$("#fun-fact-btn").on("click",()=>{console.log("clicked!"),$.ajax("/api/facts",{type:"GET"}).then(t=>{console.log(t);const e=t[Math.floor(Math.random()*t.length)];console.log(e);const d=`<p><mark><strong>Fact: ${e.id} : </strong></mark> ${e.fact}</p>`;console.log(d),$(d).appendTo("body").modal(),location.reload;});}),$(userSpendBtn).on("click",t=>{t.preventDefault(),$("#perks-results").html("");const e=$("#user-spend-input").val();console.log(`money spent: ${e}`),spendAmountSaved.push(e),console.log(spendAmountSaved),localStorage.setItem("spentAmount",JSON.stringify(spendAmountSaved));const d=amexCard(e),o=citiCard(e),n=jetBlueCard(e);$("#perks-results").append(`<tr><th>1</th><td>Amex</td><td>${d[2]}</td><td>${d[1]}</td><td>${d[0]}</td></tr>`),$("#perks-results").append(`<tr><th>2</th><td>Citi</td><td>${o[2]}</td><td>${o[1]}</td><td>${o[0]}</td></tr>`),$("#perks-results").append(`<tr><th>3</th><td>JetBlue</td><td>${n[2]}</td><td>${n[1]}</td><td>${n[0]}</td></tr>`);});