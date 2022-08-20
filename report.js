function getResult(){
    let h, c, j, tot,avg;
    h=parseInt(hm.value);
    c=parseInt(cm.value);
    j=parseInt(jm.value);
    tot=h+c+j;
    avg= tot/3;
    
    total.value="Total Marks:"+tot;
    average.value="Average:"+avg;
    
  }
 function clearResult(){
  total.value = " ";
  average.value = " ";
  hm.value=" ";
  cm.value=" ";
  jm.value=" ";
  rno.value=" ";
  nma.value= " ";
  }

