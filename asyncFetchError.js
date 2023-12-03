import axios  from "axios";
const $http =axios.create({
    baseURL:"http://localhost:3001"
})

export const fetchDataError = ()=>{
//    return $http.get("/fetchData") //返回一个promise函数
return $http.get("/fetchData_erroe") //返回一个promise函数

}
