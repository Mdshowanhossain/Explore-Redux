export const increment = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const MultiplyNumber = (num) => {
    return {
        type: "MULTIPLE",
        payload: num
    }
};

export const DivideNumber = () => {

    return {
        type: "DIVIDE"
    }
};