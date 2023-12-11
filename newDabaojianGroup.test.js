//jest 分组 describe
import NewBaojian from "./newDabaojianGroup"
const baojian = new NewBaojian()
beforeAll(() => {
    console.log("beforeAll:所有测试之前执行这个函数")
})

beforeEach(() => {
    console.log("beforeEach:每个测试之前执行这个函数")
})
describe("大脚提供的服务", () => {
    test("测试 大脚 足疗", () => {
        baojian.gongzu(1)
        baojian.anjiao()
        console.log(baojian.fuwu)
        expect(baojian.fuwu).toEqual("大脚走进房间为你足疗")
    })

    test("测试 大脚 泰式保健", () => {
        baojian.gongzu(1)
        baojian.taishi()
        console.log(baojian.fuwu)
        expect(baojian.fuwu).toEqual("大脚走进房间为你泰式保健")
    })

})

describe("刘英提供的服务", () => {
    test("测试 刘英 按摩", () => {
        baojian.gongzu(2)
        baojian.anmo()
        console.log(baojian.fuwu)
        expect(baojian.fuwu).toEqual("刘英走进房间为你按摩")
    })

    test("测试 刘英 宫廷保健", () => {
        baojian.gongzu(2)
        baojian.gongting()
        console.log(baojian.fuwu)
        expect(baojian.fuwu).toEqual("刘英走进房间为你宫廷保健")
    })
})

afterEach(() => {
    console.log("afterEach:每个测试完成之后执行这个函数")
})

afterAll(() => {
    console.log("afterAll:所有测试完成之后执行这个函数")
})