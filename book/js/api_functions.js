import { apiKey } from "./api_data.js"


const getBookLists=(listType='&QueryType=ItemNewAll',date='',max=10)=>{
  return new Promise(async(resolve,reject)=>{
    let data=await fetch(`http://www.aladin.co.kr/ttb/api/ItemList.aspx${apiKey}${listType}&MaxResults=${max}&start=1&SearchTarget=Book${date}&output=js&Version=20131101`)
    let result= data.json()
    resolve(result)
  })
}