let input="  sapna   ";

const reverse=(value)=>{
   let reverse="";
    for(let char of value){
        reverse=char+reverse;

    }

    return reverse;

}
console.log(reverse(input));

const trims=(value)=>{
return value.trim();

}
console.log(trims(input));

const capitalize=(value)=>{
   let caps="";
    for(let char in value){
        if(char==0){
          let func= value[char].toUpperCase();
            caps+=func+caps;
        
        }
        else{
                  caps+=value[char];
        }
   

    }

    return caps;

}
console.log(capitalize("sapna"));
