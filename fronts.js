class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SLL{
    constructor(head = null) {
        this.head = head
    }
    addFront(val){
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        return this
    }
    removeFront(){
        if (!this.head) {
            return null
        }
        
        let newHead = this.head.next
        this.head.next = null
        this.head = newHead
        
        return this 
    }
    front(){
        if (!this.head) {
            return null
        } else {
            return this.head.val
        }

    }

}

let SL = new SLL()
console.log(SL.addFront(18).addFront(5).addFront(73))
console.log(SL.removeFront().removeFront())
console.log(SL.front())
