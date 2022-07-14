let btn=document.querySelector('button');
const container=document.querySelector('.container');
let condition=false;



    function makeRows(rows, cols) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);

        for(let i=0;i<rows*cols;i++){
            const square=document.createElement('div');
            container.appendChild(square)
            square.classList.add('box');
        }};
        makeRows(16, 16);
    
    
    
    btn.addEventListener('click',function(){
       
        let userInt=parseInt(prompt('dimesions?'));
        container.innerHTML=" "
        if(userInt>100)userInt=100;//if dimension is greater than 100 dimension is equal to 100
        makeRows(userInt, userInt);//make row and col of inputed inputed dimension
     
        });





  



