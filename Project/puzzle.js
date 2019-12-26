let taslar = ["b0","b1","b2","b3","b4","b5","b6","b7","b8"]



//tabloya dolduruyor
function yerlestir(rndList){
    var count = 0;
    for(i=0;i<rndList.length-1;i++){
        if(rndList[i] == 0){
            continue;
        }
        for(j=i+1;j<rndList.length;j++){
            if(rndList[j] == 0){
                continue;
            }else if(rndList[i]>rndList[j]){
                count++;
            }
        }
        
    }
    
    if(count%2 == 0){
        return(true);
    }else{
        return(false);
    }
}

function randomTaslar(){
    var rndList = []
    while(true){
        rndList = []
        while(rndList.length < 9){
            var randomnumber = Math.ceil(Math.random()*9)-1
            //random number aynı gelmesini engelliyor indexOf
            if(rndList.indexOf(randomnumber) > -1) continue;
            rndList[rndList.length] = randomnumber;
        }
        if(yerlestir(rndList)){
            break;
        }
    }
    for (i = 0; i < taslar.length; i++) 
    {
        if(rndList[i] == 0)
        {
            //O olan taşı boş bırakıyoruz
            val = " "
        }else{
            val = rndList[i].toString()
        }
        document.getElementById(taslar[i]).firstChild.data = val
    }
}