const getAllResolvedResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

getAllResolvedResult<any>([Promise.resolve(true), Promise.resolve('hello')]).then(result => console.log(result))

getAllResolvedResult<any>([Promise.reject(new Error("error 01 발생")), Promise.resolve('hello')]).then(result => console.log(result)).catch(error => console.log(error.message))


Promise.race([Promise.resolve(true), Promise.resolve("hello")])
.then(result => console.log(result))

Promise.race([Promise.reject(new Error('error 02 발생')), Promise.resolve("hello")])
.then(result => console.log(result))
.catch(error => console.log(error.message))


Promise.race([Promise.resolve("hello"), Promise.reject(new Error('error 03 발생'))])
.then(result => console.log(result))
.catch(error => console.log(error.message))

// all과 race의 경우 실행 속도가 다르기 때문에 console.log가 동기적으로 출력되지 않는다.