(function() {
    const words = Array.from(document.querySelectorAll(".word"))
    console.log("WORDS:", words)
    document.addEventListener("mousemove", moveWords)

    function moveWords({ clientX, clientY }) {
        console.log(clientX, clientY)
        let centerOfScreen = { 
            left: window.innerWidth / 2,
            top: window.innerHeight / 2
        }
        console.log(words)
        let left = ((centerOfScreen.left - clientX)) * .5 //The multiplication stops the words from going off the screen
        let top = ((centerOfScreen.top - clientY)) * .5 //The multiplication stops the words from going off the screen
        console.log("TOP AND LEFT:", top, left)
        //Start by modyfiying the bottom word
        words.forEach((word, index) => {
            console.log("ayy:", word, index)
            switch (index) {
                case 0: {
                    word.style.setProperty("transform", `translate(${-left}px, ${top}px)`)
                    break
                }
                case 1: {
                    word.style.setProperty("transform", `translate(${left}px, ${top}px)`)
                    break
                }
                case 2: {
                    word.style.setProperty("transform", `translate(${-left}px, ${-top}px)`)
                    break
                }
                case 3: {
                    word.style.setProperty("transform", `translate(${left}px, ${-top}px)`)
                    break
                }
                default: break
            }
        })
    }
})()
