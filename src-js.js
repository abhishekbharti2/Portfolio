const addin = document.getElementById('code-link')
let videos = {
    vid1: {
        ytlink: 'https://youtube.com/embed/zc_Tmh3zHdU?si=Z8SqA7cxGyyzfVBU',
        yttitle: 'Navbar by using HTML and CSS',
        gitlink: 'hello'
    },
    vid2: {
        ytlink: 'https://youtube.com/embed/FQ1TTrMi5gM?si=zEYKrIOB8SOST3HY',
        yttitle: 'Login Page by using HTML and CSS',
        gitlink: 'hello'
    },
    vid3: {
        ytlink: 'https://youtube.com/embed/M9WDgOfYxC0?si=szGvFpcozg9n0kus',
        yttitle: 'Contact Page by using HTML and CSS',
        gitlink: 'hello'
    },
    vid4: {
        ytlink: 'https://youtube.com/embed/0OuT-cGUYlA?si=uJ7RLJfmyTigXFJz',
        yttitle: 'Digital Clock by using HTML, CSS & JavaScript',
        gitlink: 'hello'
    },
    vid5: {
        ytlink: 'https://youtube.com/embed/Bv-G20QTNHo?si=80i0sgT-c-O7RBAc',
        yttitle: 'Analog Clock by using HTML CSS and JavaScript',
        gitlink: 'hello'
    },
    vid6: {
        ytlink: 'https://youtube.com/embed/Dw1d-_r3EqA?si=TImw6bFPqiC78DwS',
        yttitle: 'Tic Tac Toe Game by using HTML, CSS and JavaScript',
        gitlink: 'hello'
    },
    vid7: {
        ytlink: 'https://www.youtube.com/embed/_QS1oi9DuNc?si=yt7_rZA_1CU21F0I',
        yttitle: '3D buttons by using HTML and CSS',
        gitlink: 'hello'
    },
    vid8: {
        ytlink: 'https://youtube.com/embed/uSsH58Z3aRc?si=prCc9n3_z8_rP2IF',
        yttitle: 'Glowing Card by using HTML and CSS',
        gitlink: 'hello'
    },
    vid9: {
        ytlink: 'https://youtube.com/embed/UczDDHeBL6I?si=ubXrql_pFFeHbIfQ',
        yttitle: 'Simple Loading Page by HTML, CSS and JavaScript',
        gitlink: 'hello'
    },
    vid10: {
        ytlink: 'https://youtube.com/embed/mOxN7VB3R8I?si=6TaehG4YyzUQrNsg',
        yttitle: 'Valentine\'s Special Page By using HTML, CSS & Js',
        gitlink: 'hello'
    },
    vid11: {
        ytlink: 'https://youtube.com/embed/zcm1Gft04w0?si=iV-deIrm1ZGV-0t-',
        yttitle: 'Profile Card Hover with HTML and CSS',
        gitlink: 'hello'
    },
    vid12: {
        ytlink: 'https://youtube.com/embed/nvaH2-IuiNw?si=Dy9zhCCqWAs0iphA',
        yttitle: 'Animated Name Using HTML and CSS',
        gitlink: 'hello'
    },
    vid13: {
        ytlink: 'https://youtube.com/embed/lW8lxRzzCjA?si=mThvNElm4xyFpU17',
        yttitle: 'Hover Button with Reflection By using HTML and CSS only',
        gitlink: 'hello'
    },
    vid14: {
        ytlink: 'https://youtube.com/embed/fwQC4wZGqHM?si=rBkbbFFfJ5RO9dvd',
        yttitle: 'Hover Button By Using HTML & CSS only',
        gitlink: 'hello'
    }
}

for (let key in videos) {
    addin.innerHTML += `<li class="code" src ="${videos[key].ytlink}"> ${videos[key].yttitle}</li>`;
}

const code_link = document.getElementById('code-link');
const yt_sec = document.getElementById('yt-sec');
const code = document.querySelectorAll('.code');
const get_code = document.getElementById('get-code');

get_code.onclick = function displayError() {
    document.querySelector('.src-2').innerHTML = "Error / 404 Not Found";
    document.querySelector('.src-2').style.color = "red";
    document.querySelector('.src-2').style.backgroundColor = "white";
}

code.forEach((current) => {
    current.addEventListener('click', (element) => {
        let link = current.getAttribute("src");
        document.getElementById('yt-title').innerHTML = current.textContent;
        document.getElementById('currvideo').src = link;
    })
});

const navbarbutton = document.querySelectorAll('.navbarbutton');
const loading = document.getElementById('loading-1');
navbarbutton.forEach((gotosrc) =>{
    gotosrc.addEventListener('click', () => {
        loading.style.display = "flex";
    setTimeout(() => {
        loading.style.display = "none";
    }, 5000);
})
})

const loading1 = document.getElementById('loading-2');
code.forEach((hurr) =>{
    hurr.addEventListener('click', () => {
        loading1.style.display = "flex";
    setTimeout(() => {
        loading1.style.display = "none";
    }, 3000);
})
})