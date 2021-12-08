class Counter{
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

class CounterPresenter{
    constructor(model){
        this.model = model
        this.view = null
        
    }

    setView(view){
        this.view = view
        this.binding()
    }

    binding(){
        this.view.setViewCounter(this.model.getCounter())
    }

    increaseCounter(){
        this.model.increaseCounter()
        this.binding()
    }
    decreaseCounter(){
        this.model.decreaseCounter()
        this.binding()
    }
    resetCounter(){
        this.model.resetCounter()
        this.binding()
    }
}

class CounterView{
    constructor(presenter){
        this.presenter = presenter
        this.presenter.setView(this)
    }

    setViewCounter(viewCounter){
        this.viewCounter = viewCounter
        this.updateHTML()
    }
    
    getViewCounter(){
        
        return this.viewCounter
    }
    
    increase(){
        this.presenter.increaseCounter()
    }
    
    decrease(){
        this.presenter.decreaseCounter()
    }

    reset(){
        this.presenter.resetCounter()
    }

    updateHTML(){
        let div = document.getElementById('counter')
        let template = `<h1>${this.getViewCounter()}</h1>`
        return div.innerHTML = template
    }
}

let model = new Counter()
let presenter = new CounterPresenter(model)
let view = new CounterView(presenter)
