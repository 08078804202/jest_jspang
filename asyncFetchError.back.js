import { fetchDataError } from "./asyncFetchError";

test("异步测试 fetchData 异常", () => {
    expect.assertions(1)  //异常测试的断言 要求必须跑一次expect(). 做异常测试必须加上这句话。
    return fetchDataError().catch((err) => { //这里必须加return。 不加错误也会都通过。
        expect(err.response.status).toEqual(404)
    })
})