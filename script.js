

fetch('https://first-back-deploy.vercel.app/')
.then(res => res.json())
.then(data =>{
    document.querySelector('#year').textContent = data.year
});