//jest 的四个钩子函数
import NewBaojian from "./newDabaojian"
const baojian = new NewBaojian()
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