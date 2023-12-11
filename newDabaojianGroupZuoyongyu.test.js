//jest 钩子作用域  2023/12/15
/**
 * 函数的作用域有下面三个特色
 * 1钩子函数在父级分组可作用域子集，类似继承
 *2钩子函数同级分组作用域互不干扰，各起作用
 *3先执行外部的钩子函数，再执行内部的钩子函数
 */
import NewBaojian from "./newDabaojianGroup"
const baojian = new NewBaojian()
describe("父类分组，这是默认的，可以不写", () => {
    // beforeAll(() => {
    //     console.log("beforeAll:所有测试之前执行这个函数")
    // })

    // beforeEach(() => {
    //     console.log("beforeEach:每个测试之前执行这个函数")
    // })

    beforeAll(()=>{
        console.log('吃完饭后，走进了红浪漫洗浴')
    })
    describe("大脚提供的服务", () => {
        beforeAll(()=>{
            console.log('------然后走进了666号包房')
        })
        afterEach(() => {
            console.log("作用域 afterEach:给大脚小费30元")
        })
        test.only("测试 大脚 足疗", () => {  //.only 是纠错测试时候用，表示测试的时候只是检测这个函数，其他的测试应力函数不检测，跳过去。
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
        afterEach(() => {
            console.log("作用域 afterEach:给刘英小费50元")
        })
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

    // afterEach(() => {
    //     console.log("afterEach:每个测试完成之后执行这个函数")
    // })

    // afterAll(() => {
    //     console.log("afterAll:所有测试完成之后执行这个函数")
    // })
})

