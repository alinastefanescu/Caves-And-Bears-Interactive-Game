let nume=prompt("Introdu numele tau", "nume");
alert(`Bine ai venit, ${nume}!`)

function game(){
    if (confirm("Ai ajuns intr-o padure. Mergi inainte?")){
        if (confirm ("Ai gasit o pestera. Ce faci, intri?")){
            if (confirm("Inauntru este un urs care doarme. Ce faci, il trezesti?")){
                alert("Ai murit! Nu ai putut sa te abtii, nu?")} 
            else (alert("Ai intrat intr-o camera unde ai gasit o comoara. Felicitari, ai castigat!"))
        } else {
            if(confirm("Mergi mai departe in padure. Gasesti o fantana. Ce faci, bei apa din ea?")){
                alert("Apa era otravita! Din pacate, ai murit")}
            else (alert("Te-ai oprit la timp. Apa era otravita. Felicitari, ai castigat!"))
            } 
        } else {
        (alert("Ai decis sa nu intri in padure. Incercam mai tarziu"))}
    }
