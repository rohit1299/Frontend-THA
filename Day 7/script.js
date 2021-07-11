// booked_seat =0;
// remaining_seat = 36;
const box = document.querySelectorAll(".all")

box.forEach(function(all){
    all.addEventListener("click", () =>{
        if(all.classList.contains('boxclicked')){
            all.classList.remove('boxclicked')
            // unbooked();
        }
        else{
            all.classList.add('boxclicked');
            // booked();
        }
    })
});

