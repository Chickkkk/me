/**
 * 延迟函数
 * @param delay 延迟时间
 */
export function sleep(delay = 0): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, delay))
}

/**
 * 防抖函数
 * @param func 函数
 * @param wait 延迟执行毫秒数
 */
export function debounce(func: () => void, wait = 0): () => void {
  let timeout: null | ReturnType<typeof setTimeout> = null
  return function (this: any, ...args: any) {
    if (timeout)
      clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

/**
 * 节流函数
 * @param func 函数
 * @param wait 延迟执行毫秒数
 */
export function throttle(func: () => void, wait = 0): () => void {
  let previous = 0
  return function (this: any, ...args: any) {
    const now = Date.now()
    if (now - previous > wait) {
      func.apply(this, args)
      previous = now
    }
  }
}

// export function throttle<T extends (...args: any[]) => any>(func: T, limit: number) {
//   let timer: ReturnType<typeof setTimeout>
//   let lastTime: number

//   return function (this: any, ...args: Parameters<T>) {
//     if (!lastTime) {
//       func.apply(this, args)
//       lastTime = Date.now()
//     }
//     else {
//       clearTimeout(timer)
//       timer = setTimeout(() => {
//         if (Date.now() - lastTime >= limit) {
//           func.apply(this, args)
//           lastTime = Date.now()
//         }
//       }, limit - (Date.now() - lastTime))
//     }
//   }
// }
