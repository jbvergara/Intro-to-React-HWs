console.clear()

class Stack {
  constructor(input){
    this.myArray = []
  }
  push(input){
    this.myArray.push(input)
  }
  check(){
    console.log(this.myArray)
  }
  pop(){
    if (this.myArray.length === 0){
      return console.log('Queue is currently empty')
    }
    this.myArray.pop()
  }
}

const my_stack = new Stack()
my_stack.push('Milk')
my_stack.push('Eggs')
my_stack.check()            // ['Milk', 'Eggs']
my_stack.pop()
my_stack.check()            // ['Milk']
my_stack.pop()
my_stack.check()            // []
my_stack.pop()              // 'Queue is currently empty.'