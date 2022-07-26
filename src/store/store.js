import { createStore } from 'redux'

const initialState = {
    cart: [
        {
            product: {
                "id": 1,
                "name": "angry Cat",
                "price": 100,
                "image": "/imgs/1.jpg",
                "description": "loream ibsuem is not very good"
            },

            quantity: 3
        }
    ]
};

function reducers(state) {
    return state;
}

const store = createStore(reducers, initialState)

export default store;