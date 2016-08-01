var clk = document.getElementById('hide');
clk.addEventListener('click', function(){
    for(var i=document.getElementById('mytable').rows.length ; i>=0; i--){
        if(i % 2 == 0){

        }else{
            document.getElementById('mytable').deleteRow(i-1);
        }
    }
});