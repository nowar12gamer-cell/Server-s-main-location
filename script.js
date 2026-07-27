// ==========================
// شاشة البداية
// ==========================

const message = "تم صنع هذا الموقع بواسطة ريكو";

const typing = document.getElementById("typing");
const loading = document.getElementById("loading-screen");
const main = document.getElementById("main-page");

const typingAudio = document.getElementById("typing-audio");

let i = 0;

function writeText(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        if(typingAudio){
            typingAudio.currentTime = 0;
            typingAudio.play().catch(()=>{});
        }

        i++;

        setTimeout(writeText,90);

    }else{

        setTimeout(()=>{

            loading.style.opacity = "0";
            loading.style.transition = "1s";

            setTimeout(()=>{

                loading.style.display = "none";

                main.classList.remove("hidden");

            },1000);

        },1500);

    }

}

window.onload = writeText;


// ==========================
// تشغيل الموسيقى
// ==========================

const musicBtn = document.getElementById("music");
const player = document.getElementById("youtube-player");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        player.src="https://www.youtube.com/embed/videoseries?list=RDZ1LUj7_8xiI&autoplay=1&loop=1";

        musicBtn.innerHTML="⏸️ إيقاف الموسيقى";

        playing=true;

    }else{

        player.src="";

        musicBtn.innerHTML="🎵 تشغيل الموسيقى";

        playing=false;

    }

});


// ==========================
// تأثير بسيط للأزرار
// ==========================

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mousedown",()=>{

        btn.style.transform="scale(.95)";

    });

    btn.addEventListener("mouseup",()=>{

        btn.style.transform="scale(1)";

    });

});
