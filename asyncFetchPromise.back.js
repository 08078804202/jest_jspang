import { fetchDataPromise } from "./asyncFetchPromise";

test("异步测试 fetchData Promise", () => {
   return  fetchDataPromise().then((res)=>{ //这里必须加return。 不加错误也会都通过。
        expect(res.data).toEqual({
            success: true  
        })
    })
})