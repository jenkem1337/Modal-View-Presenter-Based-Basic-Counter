export default class CounterPresenter{
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
