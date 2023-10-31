let clutter = '';
let btns = Array.from(document.querySelectorAll('.btn'));
let ansBox = document.querySelector('#text');

btns.forEach((elem)=>{
    elem.addEventListener('click', function(dets){
        if (dets.target.innerHTML == '=') {
            clutter = eval(clutter);
            ansBox.value = clutter;
        }
        else if(dets.target.innerHTML == 'C'){
            clutter = '';
            ansBox.value = clutter
        } 
        else {
            clutter += dets.target.innerHTML;
            ansBox.value = clutter;
        }
        // Note: Our ansBox is actually html input type that's why we're using .value to place clutter in it, if it would be div then we get to use .innerHTML to place clutter inside but .value is used because it is input type.
    })
})