//jest 的四个钩子函数
import NewBaojian from "./newDabaojian"
const baojian = new NewBaojian()
//beforeAll 钩子函数1 在所有测试之前
beforeAll(()=>{
    console.log("beforeAll:所有测试之前执行这个函数")
})

//beforeEach 钩子函数3 在每个测试之前
beforeEach(()=>{
    console.log("beforeEach:每个测试之前执行这个函数")
})

test("测试 大脚 足疗", () => {
    baojian.gongzu(1)
    baojian.anjiao()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual("大脚走进房间为你足疗")
})

test("测试 刘英 按摩", () => {
    baojian.gongzu(2)
    baojian.anmo()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual("刘英走进房间为你按摩")
})

//afterEach 钩子函数4 在每个测试之后
afterEach(()=>{
    console.log("afterEach:每个测试完成之后执行这个函数")
})

//afterAll 钩子函数2 在所有测试之后
afterAll(()=>{
    console.log("afterAll:所有测试完成之后执行这个函数")
})