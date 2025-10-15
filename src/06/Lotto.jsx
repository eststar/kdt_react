import React from 'react'
import LottoBall from './LottoBall'
import TailButton from '../components/TailButton';

export default function Lotto() {
  let num;
  let lottoArr = [];
  const generateLotto = ()=>{
    while(lottoArr.size() < 8){      
      num = Math.floor(Math.random()*45+1);
      if(!lottoArr.includes(num)){
        lottoArr.push(num);
        if(lottoArr.size() == 6){
          lottoArr.sort((o1, o2)=> o1-o2);
          lottoArr.push(0);
        }
      }
    }
    return lottoArr;
    // for(let i = 0; i < lottoArr.size(); i++){
    //   if(i == lottoArr.size()-1)
    //     <LottoBall lottoNum={0}/>
    //   <LottoBall lottoNum={lottoArr[i]}/>
    // }
  };
  const makeBalls = lottoArr.map((num)=>{
    <LottoBall lottoNum={num}/> 
  });

  return (
    <div>
      <div>
        {makeBalls}
      </div>
      <div>
        <TailButton bColor="blue" caption="로또번호생성" onHandle={generateLotto} />
      </div>
    </div>
  )
}
