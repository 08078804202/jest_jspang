import { fetchDataAsync } from "./asyncFetchAsync";

test("异步测试 fetchData Async 方法一", async () => {
    await expect(fetchDataAsync()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})

test("异步测试 fetchData Async 方法二", async () => {
    const respose = await fetchDataAsync()
    expect(respose.data).toEqual({
        success: true
    })
})