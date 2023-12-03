import axios  from "axios";
const $http =axios.create({
    baseURL:"http://localhost:3001"
})

export const fetchDataPromise = ()=>{
   return $http.get("/fetchData") //返回一个promise函数
}
