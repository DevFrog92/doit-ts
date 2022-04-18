function lazy(duration: number, text: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, duration)
  })
}

const test1 = async() => {
  let value = await lazy(1000, "hello")
  console.log("hello")
  value = await lazy(1000, "hello")
  console.log("value", value)

  return value
}

const test2 = async() => {
  let value = await lazy(1000, "good")
  console.log("hello")
  value = await lazy(1000, "good")
  console.log("value", value)

  return value
}

console.log("test 시작")
test1()
test2()

console.log("*******************")

test1()
.then(() => test2())
