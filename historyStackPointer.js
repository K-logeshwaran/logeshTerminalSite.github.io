class StackPointer{
    constructor(history){
        this.stack = history;
        this.pointer = this.stack.length-1;
    }

    push(item){
        this.stack.push(item);
        this.pointer =  this.stack.length-1;
    }

    handleUpArrow(){
        if(this.pointer<=0){
            return this.stack[0];
        }
        console.log(this.pointer)
        let current = this.stack[this.pointer];
        this.pointer--;
        console.log("after",this.pointer)
        return current;
    }
    handleDownArrow(){
        if(this.pointer>=this.stack.length-1){
            return this.stack[this.stack.length-1];
        }
        this.pointer++;
        let current = this.stack[this.pointer];
        return current;
    }
}
