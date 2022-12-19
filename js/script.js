let apresentacao = document.querySelector('.apresentacao')
let login = document.querySelector('.login')
let cadastro = document.querySelector('.cadastro')
let divs = document.querySelectorAll('main > div')
let divs22 = [...document.querySelectorAll('main > div')]
let insideRegisterDivs = document.querySelectorAll('.cadastroForm > div')
let insideDivs = [...document.querySelectorAll('.cadastroForm > div')]
let divssss = document.querySelectorAll('main div')
let buttons = document.querySelectorAll('main button.pr')
let buttonsDiv = document.querySelector('main button.pr').closest('div')
let labels = document.querySelectorAll('label')
let inputs = document.querySelectorAll('input')

inputs.forEach((input)=>{

    input.addEventListener('click', ()=>{

        labels.forEach((label)=>{

            
        label.style.fontSize="14px"
        label.style.left="180px"
        label.style.top="-20px"


        })




    })


})
buttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        let a = button.innerHTML
        
        
        let btnClass = button.closest('div')
        let btnIndex = divs22.indexOf(btnClass) + 1
        let btn = button.value
    
        if (btn == 1 || btn == 2) {
        showContent(btn)            
        } else{


        showInsideContent(btnClass)


        }


    })
})
let showContent = (btnClass) =>{

    console.log(divssss)
    divs.forEach((div)=>{
        div.classList.remove('ativo')



    })
    console.log(divssss)




    divs[btnClass].classList.add('ativo')
    console.log(divssss)


      console.log(divs) 
}



let showInsideContent = (btnClass) => {

     let index = insideDivs.indexOf(btnClass) + 1
    

    insideRegisterDivs.forEach((registerDiv) =>{
        registerDiv.classList.remove('ativo')



    })
    insideRegisterDivs[index].classList.add('ativo')


}