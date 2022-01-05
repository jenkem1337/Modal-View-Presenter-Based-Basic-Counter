export default class CounterView{
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

    async updateHTML(){
        let rootDiv = document.getElementById('root')
        
        let counterHTML = await fetch('./counter.html')
        rootDiv.innerHTML = await counterHTML.text()
        
        let counterDiv = document.getElementById('counter')
        let template = `<h1>${this.getViewCounter()}</h1>`
        counterDiv.innerHTML = template

    }
}
