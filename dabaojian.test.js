const { baojian1, baojian2 } = require("./dabaojian")

test("保健1 300元",()=>{
    expect(baojian1(300)).toBe("至尊享受")
})

test("保健1 2000",()=>{
    expect(baojian2(2000)).toBe("双人服务")
})