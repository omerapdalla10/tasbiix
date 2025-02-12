document.querySelector('.button').addEventListener('click', function(){
    a = document.querySelector('.om')
    a.value = parseInt(a.value) +1
    console.log(a.value);

})



document.querySelector('.remove').addEventListener('click', function(){
    a = document.querySelector('.om')
    ochirish = 0
    a.value = ochirish
    console.log(ochirish);
})

