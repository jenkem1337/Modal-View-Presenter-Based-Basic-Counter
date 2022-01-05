import CounterView from './CounterView.js'
import Counter from './CounterModel.js'
import CounterPresenter from './CounterPresenter.js'

let model = new Counter()
let presenter = new CounterPresenter(model)
let view = new CounterView(presenter)

window.view = view