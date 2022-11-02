/*const element=document.querySelector('[data-say-hi]');
const atr=element.getAttribute('data-say-hi');
console.log(atr);*/

/*const element=document.querySelectorAll('li');
for(const elem of element)
{
 const textElementContent=elem.textContent;
 if(textElementContent==="Йончи")
 {console.log(textElementContent);}

}*/


/*const element=document.querySelectorAll('.like');
console.log(element);*/

/*const list = document.querySelector('ul');
list.insertAdjacentHTML(
    'beforeend',
    '<li>Текст</li>'
    );*/

/*function maskify(cc){
    let a=cc.length;
    let strNew;
    console.log(a);
    let code=cc.substr(-4, 4);
    console.log(code);
    if (a>=4)
    {
    let str=cc.slice(0,-4);
    console.log(str);
    strNew=str.replace(/./g, '#'); 
    console.log(strNew); 
    }
    else{
        strNew="";
    }

    
    let b=strNew+code;
    console.log(b);
    return b;

}
maskify("hdfkjf jhkjh");*/
/*function isIsogram(str){
    let strNew=str.toUpperCase();
    let a=str.length;
    //let b=strNew.codePointAt(0);
   
    for (let i=0; i<a; i++)
     {
        for(let j=1+i; j<a; j++)
        {
          if(strNew[i]===strNew[j])
        {console.log(false);
            return false;
        }  
        }
        
    }
    console.log(true);
    return true;
    
    }
  
isIsogram("Dermatoglyphics");*/
/*function isDivideBy(number, a, b){
if((number%a || number%b)==0){
    return true;
}
else{
    return false;
}

}
console.log(isDivideBy(45, 1, 6));*/

/*function capitalizeWord(word) {
    let a=word.length;
    let str=word[0].toUpperCase();
    let str1=word.substr(1, a-1);
    console.log(str);
    console.log(str1);

    /*word[0].toUpperCase();*/
  /*  return str+str1;
  }
  console.log(capitalizeWord("fonder"));*/
 
 /* function century(year) {
    let a;
    if(year%100==0)
    {
       a = year/100;
    }
    else{
        a= Math.ceil(year/100);
    }
    return a;
  }
  console.log(century(1900));*/

  /*function toBinary(n){
    n=+(n).toString(2);  

    return n;
  }
  console.log(toBinary(1));*/
/*let str;
let strNew;
  function fakeBin(x){
    str=x.split();
    for(let i=0; i<str.length; i++)
    {
        if(str[i]==("0" && "1" && "2" && "3" && "4"))
        {console.log(str[i]);
            strNew[i]=replace(str[i],"0");
        console.log(strNew);}
        else{
            console.log(str[i]);
            strNew=replace(str[i],"1");
        console.log(strNew);
        }
    }
    return strNew;
}
console.log(fakeBin("35"));*/

/*function digits(n) {
    let str = String(n);
    let a=str.length;
    return a;
  }
  console.log(digits(3.14));*/

 /* const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(distanceToPump/mpg>=fuelLeft)
      {return true;}
    else {return false;}
  };
  console.log(zeroFuel(75,25,5));*/

  /*function finalGrade (exam, projects) {
    if(exam>90 || projects>10)
      {return 100;}
    else if(exam>75 && projects>=5)
      {return 90;}
    else if(exam>50 && projects>=2)
      {return 75;}
    else{return 0;}
     
  }
  console.log(finalGrade(31, 19));*/

  /*function solution(str, ending){
    let a=ending.length;
    console.log(a);
    let b=str.endsWith(ending);
    console.log(b);
    return b;
  }
  console.log(solution("abcde","abc"));*/

  /*function noSpace(x){
  
    return x.replace(/ /g,"");
    }
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));*/

//function fakeBin(x){
    /*let str="";
    for(let i = 0; i <x.length; i++)
    { 
        if(Number(x[i])<=4)
        {
          str+="0"; 
          console.log(str);
        }
        else {
          str+="1"; 
          console.log(str);
        }
        
    }*/

  //  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1');
    
    //return str;
  
 // }
 // console.log(fakeBin("4523698746323"));

 /*function checkAge(age) {
  if (age > 18)? true:confirm('Родители разрешили?');
    return a;
 
}
console.log(checkAge(17));*/
/*function reverse(n){
  let str=String(n);
  let strNew="";
  for(let i=str.length-1; i>=0; i--)
  {
    strNew+=str[i];
  }
  
  
  return strNew;
}*/

/*function toReadable(number)
{   let masiv="";
    let mas="";
    let masiv2="";
    let str = String(number);
    let a;
    let b;
    let c;
    let count=str.length;
    if (count==1){
      a=+str[0];
      masiv = num(a);
     }
        function num(n){
          switch (n){
          case 1: mas ="one"; break;
          case 2: mas ="two"; break;
          case 3: mas ="three"; break;
          case 4: mas ="four"; break;
          case 5: mas ="five"; break;
          case 6: mas ="six"; break;
          case 7: mas ="seven"; break;
          case 8: mas ="eight"; break;
          case 9: mas ="nine"; break;
          case 0: break;
      } 
        return mas;
        }

       function tenth(a,b){ 
         console.log(a,b);    
      if(a==1 && b==0)
        { masiv += "ten";}
        else
        if(a==1 && b==1)
        { masiv += "eleven";}
        else
        if(a==1 && b==2)
        { masiv += "twelve";}
        else
        if(a==1 && b==3)
        { masiv += "thirteen";}
        else
        if(a==1 && b==5)
        { masiv += "fifteen";}
        else
        if(a==1 && b==8)
        { masiv += "eighteen";}
        else if (a==1)
        { masiv += num(b)+"teen";}
        if (a==2 && b==0)
        { masiv += "twenty";}
        else if (a==2)
        { masiv += "twenty"+ " "+ num(b);}
        if (a==3 && b==0)
        { masiv += "thirty";}
        else if (a==3)
        { masiv += "thirty"+ " "+ num(b);}
        if (a==4 && b==0)
        { masiv += "forty";}
        else if (a==4)
        { masiv += "forty"+ " "+ num(b);}
        if (a==5 && b==0)
        { masiv += "fifty";}
        else if (a==5)
        { masiv += "fifty"+" "+ num(b);}
        if (a==6 && b==0)
        { masiv += "sixty";}
        else if (a==6)
        { masiv += "sixty"+" "+ num(b);}
        if (a==7 && b==0)
        { masiv += "seventy";}
        else if (a==7)
        { masiv += "seventy"+" "+ num(b);}
        if (a==8 && b==0)
        { masiv += "eighty";}
        else if (a==8)
        { masiv += "eighty"+" "+ num(b);}
        if (a==9 && b==0)
        { masiv += "ninety";}
        else if (a==9)
        { masiv += "ninety"+" "+ num(b);}
        
        return masiv;
       }

      if (count==2)
      { a=+str[0];
        b=+str[1];
        
         masiv += tenth(a,b); 
        }


    if(count == 3)
    { a = +str[0];
      b=+str[1];
      c=+str[2];
      if(b==0 && c==0){
        masiv=num(a)+" " +"hundred";
      }
      else 
      if (b==0)
      { masiv=num(a)+" " +"hundred"+" " +num(c);
    }
    else{ masiv=num(a)+" " +"hundred"+ " "+tenth(b,c);}
        
    }
   return masiv;
    }
    console.log(toReadable(815));*/

   /* var ArrowFunc = function(arr) {
      return arr.map(item => String.fromCharCode(item)).join(''); //Complete this function
    }
    
    console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]));*/

    /*function mergeArrays(arr1, arr2) {
      let arr3 = arr1.concat(arr2);
      function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      }
      
      arr3.sort(compareNumeric);
      for(let i=0; i<arr3.length; i++) {
        if(arr3[i]==arr3[i+1])
        {arr3.splice(i, 1);}
      }
      return arr3;
   
    }
    console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));*/

    /*function add(num1, num2) {
      let masiv1=String(num1);
      let masiv2=String(num2);
      let lenght2;
      let mas;
      let count=0;
      if(masiv1.length>masiv2.length)
      { lenght2=masiv2.length;}
      else{
        lenght2=masiv1.length;
      }
      for(let i=lenght2;i>0; i-- )
      { 
        count+=1;
        mas += +masiv1[i-1]+(+masiv2[i-1]);

      }
  
  
      return  mas;
    }
    console.log(add(2, 11));*/

    /*function strCount(obj){
      let count=0;
      for( let i in obj)
      { 
        if(typeof obj[i]==="string")
        { 
          count++;
        }
        if(typeof obj[i]==="object")
        { 
          let obj1={};
          obj1=Object.assign({}, obj[i]);
          for(let j in obj1){
            if(typeof obj1[j]==="string")
        { 
          count++;
        }
       }
        }
     }
      return count;
      }

      console.log(strCount({
        one: '1',
        two: 2,
        three: false,
        four: {},
        another: '3',
        andit: [],
        whatabout: { andone: 'and another', andtwo: 2, andthree: 'and again' },
        lastkey: [ [ [Array], false ], 0 ] 
        }));*/

        /*function rangeOfNumbers(startNum, endNum) {
          let arr;
          if(startNum > endNum){
            console.log("1");
             return [];
          }
          else{
            
            arr=rangeOfNumbers(startNum, endNum-1);
            arr.push(endNum);
            console.log(arr);
            return arr;
          }
         }
         rangeOfNumbers(2, 5);*/

         /*const sum = (...par) => {
          const args = par;
          return args.reduce((a, b) => a + b, 0);
         // return args;
        }
        console.log(sum(1,2,3));*/
        
        /*const result = {
          success: ["max-length", "no-amd", "prefer-arrow-functions"],
          failure: ["no-var", "var-on-top", "linebreak"],
          skipped: ["no-extra-semi", "no-dup-keys"]
        };
        function makeList(arr) {
          // Only change code below this line
          
          const failureItems = [];
          for(let i=0; i<arr.length; i++)
          {
            failureItems.push(`'<li class="text-warning">${arr[i]}</li>'`);
        
        
          }
         
          // Only change code above this line
        console.log(failureItems);
          return failureItems;
        }
        
        const failuresList = makeList(result.failure);*/
       /* function parseInt(string) {
          let n=0;
          let k=0;
          let sum=0;
          let string1="";
          let string2="";
          let arr=0;
          let strArr="";
          string1=string.replace(/ and /g, " ");
         string2=string.replace(/ and /g, " ");
if(string.indexOf("million")>=0)
{
return 1000000;
}
if(string.indexOf("thousand")>=0)
{
  k=string1.indexOf("thousand");
  strArr=string1.slice(0, string1.indexOf("thousand")-1);
  sum+=Int(strArr)*1000;
  string1=string2.slice(k+9);
  
}
 if(string1.length>0)
 {
  sum+=Int(string1);
  
 }
  function Int(str)
  { arr=0;
 string1=str;
  if(string1.indexOf("hundred")>=0)
    {
    n=string1.indexOf("hundred");
    str=string1.slice(0,n-1);
    arr+=num(str)*100;
   
    string1=string1.slice(n+8);
    
    }
  if(string1.indexOf("ty")>=0)
    {
    n=string1.indexOf("ty");
    str=string1.slice(n-3,n);
    
    arr+=tenth(str)*10;
   
    string1=string1.slice(n+3);
    
    }
  if(string1.length>0) {
    arr+=num(string1);
    }
    return arr;
    }
    
    function num(str1){
         
          let mas=0;
          switch (str1){
          case "zero": mas =0; break;  
          case "one": mas =1; break;
          case "two": mas =2; break;
          case "three": mas =3; break;
          case "four": mas =4; break;
          case "five": mas =5; break;
          case "six": mas =6; break;
          case "seven": mas =7; break;
          case "eight": mas =8; break;
          case "nine": mas =9; break;
          case "ten": mas =10; break;
          case "eleven": mas =11; break;
          case "twelve": mas =12; break;
          case "thirteen": mas =13; break;
          case "fourteen": mas =14; break;
          case "fifteen": mas =15; break;
          case "sixteen": mas =16; break;
          case "seventeen": mas =17; break;
          case "eighteen": mas =18; break;
          case "nineteen": mas =19; break;
      } 
        return mas;
        }
        function tenth (str1){
          let mas=0;
          switch (str1){
          case "wen": mas =2; break;
          case "hir": mas =3; break;
          case "for": mas =4; break;
          case "fif": mas =5; break;
          case "six": mas =6; break;
          case "ven": mas =7; break;
          case "igh": mas =8; break;
          case "ine": mas =9; break;
      } 
        return mas;
        }
    
   return sum;
    }
    console.log(parseInt('seven hundred eighty-three thousand nine hundred and nineteen'));
    parseInt('seven hundred eighty-three thousand nine hundred and nineteen');*/

   /* function decompose(n) {
     let m=0;
     let arr=[];
     let n=0;
     m=Math.pow(n,2)-Math.pow(n-1,2); 
     n=m;
     arr.unshift(n-1);
     while(Number.isInteger (Math.sqrt(m))!==true)
     { m--;
     }
     arr.unshift(Math.sqrt(m));
     n=n-m;
     console.log(arr, m,n);
     
  }
  decompose(50);*/
  function multiply(a, b)
  {
    let a1=a.replace(/^0+/g,"").split("");
    let b1=b.replace(/^0+/g,"").split("");
    let m=0;
   
    let proiz=[];
    for(let i=0; i<a1.length; i++)
    { 
      for(let j=0; j<b1.length; j++)
      { 
        m=a1[i]*b1[j];
        
         proiz[i+j]=(proiz[i+j])?proiz[i+j]+m: m; 
         
      }
    }
    for(let k=proiz.length-1; k>=1; k--){
      if(proiz[k]-10>=0)
      {
       // console.log(proiz[k]%10, Math.floor(proiz[k]/10));
        proiz[k-1]=proiz[k-1]+Math.floor(proiz[k]/10);
        proiz[k]=proiz[k]%10;
        
      }
    }
    return proiz.join("").length>0?proiz.join(""):"0";
  }
  console.log(multiply("0", "30"));
  multiply("0", "30");