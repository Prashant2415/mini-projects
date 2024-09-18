document.addEventListener("DOMContentLoaded", function(){
    const accordionHeader = document.querySelectorAll(".accordion-header");

    accordionHeader.forEach(header =>{
        header.addEventListener("click",function(){
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";

            accordionHeader.forEach(otherHeader =>{
                if(otherHeader != this)
                {
                    otherHeader.nextElementSibling.style.display = "none";
                }
            })
        })
    })
})