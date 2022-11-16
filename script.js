var faqElements = document.querySelectorAll(".faq-button");
console.log(faqElements)
if (faqElements.length > 0) {

    faqElements.forEach((element, index) => element.addEventListener('click', (event) => {
        // This codes makes it so only one question is open at a time
        // Comment out if you want to have multiple questions open at the same time
        const wasClicked = event.target.classList.contains('clicked')
        
        faqElements.forEach(element => {
            element.classList.remove('clicked')
            const visbleWrapper = element.parentElement;
            const invisibleWrapper = visbleWrapper.nextSibling.nextSibling;
            invisibleWrapper.classList.remove('question-hidden-shown')
        })

        element.classList.add('clicked')
        const visbleWrapper = event.target.parentElement;
        const invisibleWrapper = visbleWrapper.nextSibling.nextSibling;
    
        if (!wasClicked) {
            invisibleWrapper.classList.add('question-hidden-shown')
        } else {
            element.classList.remove('clicked')
        }
    }))
}