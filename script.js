// ===============================
// تم صنع هذا الموقع بواسطة ريكو
// ===============================

const text = "تم صنع هذا الموقع بواسطة ريكو";

const typing = document.getElementById("typing");
const loading = document.getElementById("loading");
const main = document.getElementById("main");

const typingSound = document.getElementById("typingSound");

let index = 0;

function typeWriter() {

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        if (typingSound) {
            typingSound.currentTime = 0;
            typingSound.play().catch(() => {});
        }

        index++;

        setTimeout(typeWriter, 90);

    } else {

        setTimeout(() => {

            loading.style.opacity = "0";

            loading.style.transition = "1s";

            setTimeout(() => {

                loading.style.display = "none";

                main.classList.remove("hidden");

            },1000);

        },1500);

    }

}

window.onload = () => {

    typeWriter();

};

// ===============================
// زر تشغيل الموسيقى
// ===============================

const musicBtn = document.getElementById("musicBtn");

const youtube = document.getElementById("youtube");

let playing = false;

musicBtn.onclick = () => {

    if(!playing){

        youtube.src =
        "https://www.youtube.com/embed/videoseries?list=RDZ1LUj7_8xiI&autoplay=1&loop=1";

        musicBtn.innerHTML = "⏸️ إيقاف الموسيقى";

        playing = true;

    }else{

        youtube.src =
        "https://www.youtube.com/embed/videoseries?list=RDZ1LUj7_8xiI";

        musicBtn.innerHTML = "🎵 تشغيل الموسيقى";

        playing = false;

    }

};

// ===============================
// تأثير ظهور الأزرار
// ===============================

document.querySelectorAll(".btn").forEach((btn)=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform = "scale(1)";

    });

});    let appModal = document.getElementById('applicationModal');
    
    if (event.target === rulesModal) {
        rulesModal.classList.add('hidden');
    }
    if (event.target === appModal) {
        appModal.classList.add('hidden');
    }
}

// إرسال النموذج
function submitForm(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gangApplication: document.getElementById('gangApplication').value,
        serverApplication: document.getElementById('serverApplication').value,
        complaint: document.getElementById('complaint').value
    };

    // إرسال البيانات للسيرفر
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // إظهار رسالة النجاح
        document.getElementById('applicationForm').style.display = 'none';
        document.getElementById('successMessage').classList.remove('hidden');
        
        // إعادة تعيين النموذج بعد ثانيتين وإغلاق الـ Modal
        setTimeout(() => {
            document.getElementById('applicationForm').reset();
            document.getElementById('applicationForm').style.display = 'block';
            document.getElementById('successMessage').classList.add('hidden');
            closeApplication();
        }, 2000);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('حدث خطأ في الإرسال. حاول مجدداً.');
    });
}
