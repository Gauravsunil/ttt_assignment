const express=require('express');

const userRouter=express.Router();

userRouter.get('/string/:strng',(req,res,next)=>{

  console.log(req.params.strng);
    var str=req.params.strng;
    let decoded = {
      a: '2', b: 'o', c: 'p',
      d: 'q', e: 'r', f: 's',
      g: 't', h: 'u', i: 'v',
      j: '5', k: 'x', l: 'y',
      m: '9', n: 'n', o: 'b',
      p: 'c', q: 'd', r: 'e',
      s: 'f', t: 'g', u: 'h',
      v: 'i', w: 'w', x: 'k',
      y: 'l', z: 'z', 2:'a',
      5: 'j', 9: 'm',   
    }
    
    //convert the string to lowercase
    str = str.toLowerCase();
    
    //decipher the code
    let decipher = '';
    for(let i = 0 ; i < str.length; i++){
      decipher += decoded[str[i]];
    }
    
    //return the output
    res.send(decipher);
    res.end();
})

module.exports=userRouter;