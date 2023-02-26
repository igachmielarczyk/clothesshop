// Button Plus and minus

const minusButtons = document.querySelectorAll('.minus');
const plusButtons = document.querySelectorAll('.plus');
const inputFields = document.querySelectorAll('.input');

minusButtons.forEach(minusButton => {
    minusButton.addEventListener('click', function(e) {
        if (this.nextElementSibling.value >=1) {
            e.preventDefault();
            const currentValue = Number(this.nextElementSibling.value) || 0;
            this.nextElementSibling.value = currentValue - 1; 
        }
    })
})
plusButtons.forEach(plusButton => {
    plusButton.addEventListener('click', function(e) {
        if (this.previousElementSibling.value >=0) {
            e.preventDefault();
            const currentValue = Number(this.previousElementSibling.value) || 0;
            this.previousElementSibling.value = currentValue + 1;
        }
    })
})
// Remove item from basket
const trashes = document.querySelectorAll('.trash');

trashes.forEach(trash => {
    trash.addEventListener('click', function() {
        trashParent = this.parentElement
        trashParent.classList.add('opacity');
        if (trashParent.classList.contains('opacity')) {
            trashParent.addEventListener('transitionend', function() {
                trashParent.remove();
            })
        }
    })
})

