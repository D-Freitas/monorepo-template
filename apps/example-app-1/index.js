import { exampleModule1 } from '@monorepo-template/shared/example-module-1'

export function sum(a, b) {
  return a + b
}

export function shouldReturnAMessageCorrectly() {
  const outputMessage = exampleModule1()
  return outputMessage
}
