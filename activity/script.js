let ticketalreadyopened;
let open_modal=document.querySelector(".open-modal");
let close_modal=document.querySelector(".close-modal");
let ticketcontainer=document.querySelector(".tickets-container");
//let ticketmodal;

open_modal.addEventListener("click",openticket);
close_modal.addEventListener("click",closeticket);
function openticket(e)
{
    if(ticketalreadyopened){
        return;
    }
    let ticketmodal=document.createElement("div");
    ticketmodal.classList.add("ticket-modal");
    ticketmodal.innerHTML=` <div class="ticket-text" contenteditable="true" spellcheck="false"><p style="font-size:130%;color:brown;font-family:bold">Enter your Text!</p>
    
    </div>
    <div class="ticket-filters">    
        <div class="ticket-filter red selected-filter"></div>
        <div class="ticket-filter green"></div>
        <div class="ticket-filter yellow"></div>
        <div class="ticket-filter black"></div>
        <div class="ticket-filter blue"></div>
        <div class="saveBtn"><i class="fas fa-save"></i></div>
    </div>
</div>
`
document.querySelector("body").append(ticketmodal);
ticketalreadyopened=true;
let ticket_text=ticketmodal.querySelector(".ticket-text");
ticket_text.addEventListener("click" ,function(e){
    e.target.textContent="";
})
let ticketTextDiv = ticketModal.querySelector(".ticket-text");
  ticketTextDiv.addEventListener("keypress", handleKeyPress);

let ticketFilters = ticketmodal.querySelectorAll(".ticket-filter");
  for (let i = 0; i < ticketFilters.length; i++) {
    ticketFilters[i].addEventListener("click", function (e) {
      if (e.target.classList.contains("selected-filter")) {
        return;
      }
      document
        .querySelector(".selected-filter")
        .classList.remove("selected-filter");
      e.target.classList.add("selected-filter");
    });
  }
  let savebtn=ticketmodal.querySelector(".fas.fa-save");
  savebtn.addEventListener("click", opentickettodisplay);
}
function closeticket(e)
{
    if(ticketalreadyopened)
    {
    let ticket_modal=document.querySelector(".ticket-modal");
    ticket_modal.remove(); 
    }
    
    ticketalreadyopened=false;
}
function handleKeyPress(e) {
    if (e.key == "Enter" && isTextTyped && e.target.textContent) {
      let filterSelected = document.querySelector(".selected-filter").classList[1];
      let ticketId = uuid();
      let ticketInfoObject = {
        ticketFilter: filterSelected,
        ticketValue: e.target.textContent,
        ticketId : ticketId
      };
      appendTicket(ticketInfoObject);
      closeticket.click();
    }
  
    if(!isTextTyped) {
      isTextTyped = true;
      e.target.textContent = "";
    }
  }
