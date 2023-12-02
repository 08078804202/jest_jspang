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
test("toBeFalsy 匹配器",()=>{
    var a=false
    expect(a).toBeFalsy()   //括号内不能填写任何值
})