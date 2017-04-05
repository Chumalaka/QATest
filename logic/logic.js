function solution(number){
  
  for (var i=1, A=0, B=0, C=0; i < number; i++)
  {
    if (i % 15 === 0)
        C++;
    else if (i % 3 === 0)
        A++;
    else if (i % 5 === 0)
        B++;
   }
   console.log([A,B,C]);
};