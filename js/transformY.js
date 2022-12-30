const hiddenElements = document.querySelectorAll('.unvisible');
hiddenElements.forEach((el) => observer.observe(el));

const observerr = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('shown');
        }else{ 
            entry.target.classList.remove('shown');
        }
    });
});

const hiddenElementss = document.querySelectorAll('.on');
hiddenElementss.forEach((el) => observerr.observe(el));


