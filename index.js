const aInput = document.querySelectorAll('.aclicked')
const bInput = document.querySelectorAll('.bclicked')
const cInput = document.querySelectorAll('.cclicked')
const extraPara = document.querySelector('.extra-para')

const aArray = Array.from(aInput)
const bArray = Array.from(bInput)
const cArray = Array.from(cInput)

let total_a, total_b, total_c
let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault();

    total_a = aArray.filter((a) => a.checked === true).length
    total_b = bArray.filter((b) => b.checked === true).length
    total_c = cArray.filter((c) => c.checked === true).length

    if (total_a + total_b + total_c !== 15) {
        alert("Please Answer All the Questions.")

    }
    else if ((total_a > total_b) && (total_a > total_c)) {
        window.location.assign("Vata.html")

    }
    else if (total_b > total_a && total_b > total_c) {
        window.location.assign("Pitta.html")
    }

    else if (total_c > total_a && total_c > total_b) {
        window.location.assign("Kapha.html")
    }
    else if (total_a === total_b) {
        extraPara.innerHTML = ("Your VATA and PITTA DOSHA are Dominant in your body.")
    }
    else if (total_a === total_c) {
        extraPara.innerHTML = ("Your VATA and KAPHA DOSHA are Dominant in your body.")
    }
    else if (total_b === total_c) {
        extraPara.innerHTML = ("Your PITTA and KAPHA DOSHA are Dominant in your body.")
    }
})
