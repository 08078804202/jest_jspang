import { fetchData } from "./asyncFetch";
// const {fetchData} =require("./asyncFetch")

//下面的方法没有参数done，任何状况都会通过，包括返回数据错误的情况。因为他没有等到异步函数执行完就已经验证了
test("异步测试 fetchData 错误方式", () => {
    fetchData(
        (data) => {
            expect(data).toEqual({  //100%通过
                success: true
            })
        }
    )
})

//下面的方法有参数done，表示异步函数全部执行完毕后在进行验证测试。
test("异步测试 fetchData 正确方式", (done) => {
    fetchData(
        (data) => {
            expect(data).toEqual({
                success: true  
            })
            done()   //结果一直才会通过。
        }
    )
})