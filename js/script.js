let apresentacao = document.querySelector('.apresentacao')
let login = document.querySelector('.login')
let cadastro = document.querySelector('.cadastro')
let divs = document.querySelectorAll('main div')
let buttons = document.querySelectorAll('main button.pr')
let buttonsDiv = document.querySelector('main button.pr').closest('div')


buttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        
        
        
        let btnClass = button.closest('div')
        showContent(btnClass)



    })
})
let showContent = (btnClass) =>{

    console.log(btnClass.className)
    divs.forEach((div)=>{
        div.classList.remove('ativo')



    })
    
    login.classList.add('ativo')
    

}