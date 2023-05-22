const toggleTheme = document.getElementById("toggle-theme");

const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
    if (toggleTheme.checked){
        localStorage.setItem("theme", "dark");
        html.dataset.theme = "dark";
        console.log(localStorage);
    } else {
        localStorage.setItem("theme", "light");
        html.dataset.theme = "light";
        console.log(localStorage);
    }
};

const theme = localStorage.getItem("theme");

let img = document.getElementById("mImage")

if (theme == "light"|| !theme){
    html.dataset.theme = "light";
} else {
    html.dataset.theme = "dark";
    document.getElementById("toggle-theme").checked = true;
}

const correctAtbildes = ["Indonēzija", "Austrālija", "liepāja"]

for (let i = 1; i <= 3; i++){
const visasAtbildes = document.getElementsByName(i);

visasAtbildes.forEach( atbilde => {
    console.log("Pildīts");
    atbilde.addEventListener("click", () => checkHandler(visasAtbildes, correctAtbildes));
})

function checkHandler(viss, pareizaAtbilde){
    viss.forEach(atbilde => {
        if(atbilde.checked == true){
            if (atbilde.value == pareizaAtbilde[i-1]){
                atbilde.parentNode.style.backgroundColor = "#00B16E";
                console.log("pi")
            }else{
                atbilde.parentNode.style.backgroundColor = "#DC3757";
            };
            
        } else {
            atbilde.parentNode.style.backgroundColor = "var(--primary-color)";
        }
    })
}

/*function checkHandler(){
    visasAtbildes.forEach(atbilde => {
        if(atbilde.checked == true){
            if (atbilde.value == correctAtbildes[i-1]){
                atbilde.parentNode.style.backgroundColor = "#00B16E";
                console.log("pi")
            }else{
                atbilde.parentNode.style.backgroundColor = "#DC3757";
            };
            
        } else {
            atbilde.parentNode.style.backgroundColor = "var(--primary-color)";
        }
    })
}*/
}
/* pārāk garš
const igaunija = document.getElementById("Igaunija");
const uk = document.getElementById("uk");
const liepaja = document.getElementById("liepaja");
const indo = document.getElementById("indo");

const igaunija2 = document.getElementById("EST");
const aus = document.getElementById("AUS");
const liet = document.getElementById("LT");
const kan = document.getElementById("CAN");

igaunija.addEventListener("click", checkHandler);
uk.addEventListener("click", checkHandler);
liepaja.addEventListener("click", checkHandler);
indo.addEventListener("click", checkHandler);

igaunija2.addEventListener("click", checkHandler);
aus.addEventListener("click", checkHandler);
liet.addEventListener("click", checkHandler);
kan.addEventListener("click", checkHandler);

function checkHandler(){ 
    if (igaunija.checked == true){
        igaunija.parentNode.style.backgroundColor = "#DC3757";
    } else {
        igaunija.parentNode.style.backgroundColor = "var(--primary-color)";
    }

    if (uk.checked == true){
        uk.parentNode.style.backgroundColor = "#DC3757";
    } else {
        uk.parentNode.style.backgroundColor = "var(--primary-color)";
    }

    if (liepaja.checked == true){
        liepaja.parentNode.style.backgroundColor = "#DC3757";
    } else {
        liepaja.parentNode.style.backgroundColor = "var(--primary-color)";
    }

    if (indo.checked == true){
        indo.parentNode.style.backgroundColor = "#00B16E";
    } else {
        indo.parentNode.style.backgroundColor = "var(--primary-color)";
    }

    if (igaunija2.checked == true){
        igaunija2.parentNode.style.backgroundColor = "#DC3757";
    } else {
        igaunija2.parentNode.style.backgroundColor = "var(--primary-color)";
    }

    if (kan.checked == true){
        kan.parentNode.style.backgroundColor = "#DC3757";
    } else {
        kan.parentNode.style.backgroundColor = "var(--primary-color)";
    }

    if (liet.checked == true){
        liet.parentNode.style.backgroundColor = "#DC3757";
    } else {
        liet.parentNode.style.backgroundColor = "var(--primary-color)";
    }

    if (aus.checked == true){
        aus.parentNode.style.backgroundColor = "#00B16E";
    } else {
        aus.parentNode.style.backgroundColor = "var(--primary-color)";
    }
}*/