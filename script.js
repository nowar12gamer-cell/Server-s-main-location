// متغير للتحكم في الموسيقى
let isMusicPlaying = false;

// عرض القوانين
function showRules() {
    document.getElementById('rulesModal').classList.remove('hidden');
}

// إغلاق القوانين
function closeRules() {
    document.getElementById('rulesModal').classList.add('hidden');
}

// عرض نموذج التقديم
function showApplication() {
    document.getElementById('applicationModal').classList.remove('hidden');
}

// إغلاق نموذج التقديم
function closeApplication() {
    document.getElementById('applicationModal').classList.add('hidden');
}

// التحكم في الموسيقى
function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    const btn = document.querySelector('.music-btn');
    
    if (isMusicPlaying) {
        music.pause();
        btn.textContent = '🔇 الموسيقى';
        btn.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        music.play();
        btn.textContent = '🔊 الموسيقى';
        btn.classList.add('playing');
        isMusicPlaying = true;
    }
}

// تشغيل الموسيقى تلقائياً عند فتح الصفحة
window.addEventListener('load', function() {
    const music = document.getElementById('backgroundMusic');
    const btn = document.querySelector('.music-btn');
    
    // محاولة التشغيل التلقائي
    music.play().then(() => {
        isMusicPlaying = true;
        btn.textContent = '🔊 الموسيقى';
        btn.classList.add('playing');
    }).catch(() => {
        // إذا فشل التشغيل التلقائي، اجعل المستخدم يضغط الزر
        console.log('التشغيل التلقائي معطل - انقر على زر الموسيقى');
        isMusicPlaying = false;
        btn.textContent = '🔇 الموسيقى';
    });
});

// إغلاق Modal عند الضغط خارجه
window.onclick = function(event) {
    let rulesModal = document.getElementById('rulesModal');
    let appModal = document.getElementById('applicationModal');
    
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
