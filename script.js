let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            console.log('operate')
            entry.target.classList.add('show');
            entry.target.classList.add('show-experience');
            entry.target.classList.add('show-experience-2');
            
            
        }
        else{
            entry.target.classList.remove('show')
            entry.target.classList.remove('show-experience')
            entry.target.classList.remove('show-experience-2');
           
           
            
        }


    })

})

const hiddenElement  = document.querySelectorAll('.skill-boxes')
const hiddenElements  = document.querySelectorAll('.experience-boxes')
const hiddenElements2  = document.querySelectorAll('.experience-boxes-2')

hiddenElement.forEach((el)=>observer.observe(el))
hiddenElements.forEach((el)=>observer.observe(el))
hiddenElements2.forEach((el)=>observer.observe(el))


