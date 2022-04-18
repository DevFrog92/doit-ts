import { readFileSync, readFile } from "fs"
// package.json 파일을 동기 방식으로 읽는 예
console.log("read package.json using synchronous api...")
// file의 상대경로는 node_modules의 위치에서 부터의 상대경로
const buffer: Buffer = readFileSync('./package.json')
console.log(buffer.toString())

// package.json 파일을 비동기 방식으로 읽는 예
readFile('./package.json', (error:unknown, buffer:Buffer):void => {
  console.log("read package.json using asynchronous api...")
  console.log(buffer.toString())
})

const readFilePromise = (filename: string): Promise<string> => new Promise<string>((resolve, reject) => {
  readFile(filename, (error, buffer:Buffer) => {
    if(error){
      reject(error)
    }
    else{
      resolve(buffer.toString())
    }
  })
});

// semicolon이 없으니까 오류가 발생. new Promise<string> is not callable error
// 아래의 즉시 실행함수를 다른 코드 문맥으로 해석한 것이 아니라 함수 호출 부분으로 해석했기 때문이다.

(async () => {
  const content = await readFilePromise('./package.json')
  console.log('read package.json using Promise and async/await...')
  console.log(content)
})()