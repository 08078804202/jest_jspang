//toBe匹配器 严格匹配
// test("007号技师",()=>{
//     var a={number:"007"}
//     // expect("007号技师").toBe('007号技师')  //ok
//     // expect(a).toBe({number:"007"}) //error
// })

//toEqual 匹配器 内容匹配
// test("007号技师",()=>{
//     var a={number:"007"}
//     expect(a).toEqual({number:"007"}) 
// })

//toBeNull 匹配器 空null 匹配
// test("toBeNull 匹配器",()=>{
//     var a=null
//     expect(a).toEqual(null) //undefined不可
// })

//toBeUndefined 匹配器 undefined 匹配
// test("toBeUndefined 匹配器",()=>{
//     var a=undefined
//     expect(a).toBeUndefined(undefined)  //null不可
// })

//toBeDefined 匹配器 defined 匹配  defined 有定义
// test("toBeDefined 匹配器",()=>{
//     var a=1
//     expect(a).toBeDefined()   //括号内不能填写任何值
// })

//toBeTruthy 匹配器 真 匹配  
// test("toBeTruthy 匹配器",()=>{
//     var a=true
//     expect(a).toBeTruthy()   //括号内不能填写任何值
// })

//toBeFalsy 匹配器 假 匹配  
// test("toBeFalsy 匹配器",()=>{
//     var a=false
//     expect(a).toBeFalsy()   //括号内不能填写任何值
// })

//toBeGreaterThan 匹配器 大于 匹配  
// test("toBeGreaterThan 匹配器",()=>{
//     var a=10
//     expect(a).toBeGreaterThan(9)   //括号内填写数值
// })
//toBeGreaterThanOrEqual 匹配器 大于等于 匹配  
// test("toBeGreaterThanOrEqual 匹配器",()=>{
//     var a=10
//     expect(a).toBeGreaterThanOrEqual(10)   //括号内填写数值
// })

//toBeLessThan 匹配器 小于 匹配  
// test("toBeLessThan 匹配器",()=>{
//     var a=10
//     expect(a).toBeLessThan(11)   //括号内填写数值
// })

//toBeLessThanOrEqual 匹配器 小于等于 匹配  
// test("toBeLessThanOrEqual 匹配器",()=>{
//     var a=9
//     expect(a).toBeLessThanOrEqual(9)   //括号内填写数值
// })

//toBeCloseTo 匹配器  小数字相加时会有float精度问题 匹配  
// test("toBeCloseTo 匹配器",()=>{
//     var one=0.1
//     var two=0.2
//     // expect(one+two).toEqual(0.3)   // one+two=Received: 0.30000000000000004
//     expect(one+two).toBeCloseTo(0.3)
// })

//toMatch 匹配器  字符串 匹配  
// test("toMatch 匹配器",()=>{
//     var str="孙悟空，猪八戒，沙河尚"
//     expect(str).toMatch("猪八戒，沙河尚")   //括号内填写字符串.判断str里面包不包含后面的字符串
// })

//toContain 匹配器  数组 匹配  
// test("toContain 匹配器",()=>{
//     var arr=["孙悟空","猪八戒","沙河尚"]
//     expect(arr).toContain("猪八戒","沙河尚")   //括号内填写字符串.判断arr里面包不包含后面的字符串
// })

//toContain 匹配器  set 数组 匹配  
// test("toContain 匹配器",()=>{
//     var arr=["孙悟空","猪八戒","沙河尚"]
//     var data =new Set(arr)
//     expect(data).toContain("猪八戒","沙河尚")   //括号内填写字符串.判断data里面包不包含后面的字符串
// })

//**********异常 ******************************
const throwNewError=()=>{
    throw new Error("this is error")
}
//toThrow 匹配器  异常 匹配  
// test("toThrow 匹配器",()=>{
//     // expect(throwNewError).toThrow()   //ok
//     expect(throwNewError).toThrow("this is error")  //错误信息要一致
// })
//**************end******************* */

//not 是取反的作用
const throwNewErrorNot=()=>{
    return 1
}
test("toThrow.not 匹配器",()=>{
    // expect(throwNewError).not.toThrow("this is error") //error //not 取反 就是要求不抛出异常
    expect(throwNewErrorNot).not.toThrow() //ok //not 取反 就是要求不抛出异常
})
//******************************** */