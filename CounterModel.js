export default class Counter{
    constructor(){
        this.state = 0
    }

    increaseCounter(){
        this.state++
    }

    decreaseCounter(){
        this.state--
    }

    resetCounter(){
        this.state = 0
    }

    getCounter(){
        return this.state
    }

}
