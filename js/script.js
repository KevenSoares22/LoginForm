let apresentacao = document.querySelector('.apresentacao')
let login = document.querySelector('.login')
let cadastro = document.querySelector('.cadastro')
let divs = document.querySelectorAll('main div')
let divs22 = [...document.querySelectorAll('main div')]



let buttons = document.querySelectorAll('main button.pr')
let buttonsDiv = document.querySelector('main button.pr').closest('div')


buttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        let a = button.innerHTML
        
        
        let btnClass = button.closest('div')
        let btnIndex = divs22.indexOf(btnClass) + 1
    

        console.log(a)



        showContent(btnClass, btnIndex)



    })
})
let showContent = (btnClass, btnIndex) =>{

    console.log(btnClass.className)
    divs.forEach((div)=>{
        div.classList.remove('ativo')



    })
    
    divs[4].classList.add('ativo')
    

}