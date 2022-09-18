import React,{FC,Fragment,useState,} from 'react';
import {uuid} from './uuid'
import Home from "./Home"
import BarIndex from './BarIndex'
interface listType{
  name:string,
  age:number,
  class:string,
  id:string
}
interface seriesType{
  data:number[],
  name:string,
  type?:string,
  barWidth?:number
}
interface barStyle {
  width: string,
  height: string
};
let lists=[
  {
    id:uuid(),
    name:'ws',
    age:1,
    class:'一年级'
  },
  {
    id:uuid(),
    name:'ws',
    age:2,
    class:'一年级'
  },{
    id:uuid(),
    name:'ws',
    age:3,
    class:'一年级'
  }
]
const seriesDatas=[
  {
      type: "bar", // 柱状图
      name: "总数",
      data: [320, 332,232,134,324,134,306],
      barWidth: 20, // 柱子宽度
    },
{
  type: "bar", // 柱状图
  name: "剩余",
  barWidth: 20, // 柱子宽度
  data: [30, 332,232,134,29,134,306]
},
{
  type: "bar", // 柱状图
  name: "卖出",
  barWidth: 20, // 柱子宽度
  data: [320, 332,232,134,324,134,306]
},
{
type: "bar", // 柱状图
name: "进货数",
barWidth: 20, // 柱子宽度
data: [220, 432,122,114,214,334,225]
},

]
const barStyles={
   width:'1200px',
   height:'400px'
}
const App:FC=() =>{
  const [index,setIndex]=useState<number>(0)
  const [list,setList]=useState<listType[]>([])
  const [xData]=useState<string[]>(["冬瓜", "茄子", "丝瓜", "玉米", "红薯", "西红柿", "芹菜"])
  const [legendData]=useState<string[]>(['总数','剩余','卖出','进货数','变化值'])
  const [seriesData]=useState<seriesType[]>(seriesDatas)
  const [barStyle]=useState<barStyle>(barStyles)
  const addHandle:()=>void=()=>{
    setIndex(index=>index+1)
  }
  const reduceHandle:()=>void=()=>{
    setIndex(index=>index-1)
  }
  const transformParent:()=>void=()=>{
     setList(lists)
  }
  const getChangeList=(val:listType)=>{
    val.id=uuid()
    lists.push(val)
    setList([...lists])
  }
  return (
    <Fragment>
    <h1>{index}</h1>
    
    <button onClick={addHandle}>点击加一</button>
    <button onClick={reduceHandle}>点击减一</button>
    <button onClick={transformParent}>子传递父组件</button>
    <hr />
  <div>
    <h1>子组件</h1>
  <Home list={list} getChangeList={getChangeList}/>
  <BarIndex xData={xData} legendData={legendData} seriesData={seriesData} barStyle={barStyle}/>
  </div>
    </Fragment>
  );
}

export default App;
