const initialState = {
    data: [],
    isLoading: false,
    detail: {}
}

export default news = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NEWS_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_NEWS_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'GET_NEWS_FULFILLED':
            // console.warn(JSON.stringify(action.payload.data))
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case 'GET_NEWS_DETAIL_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_NEWS_DETAIL_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'GET_NEWS_DETAIL_FULFILLED':
            // console.warn(JSON.stringify(action.payload.detail))
            return {
                ...state,
                isLoading: false,
                detail: action.payload
            }
        case 'CREATE_NEWS_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'CREATE_NEWS_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'CREATE_NEWS_FULFILLED':
            // console.warn(JSON.stringify(action.payload.detail))
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case 'UPDATE_NEWS_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'UPDATE_NEWS_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'UPDATE_NEWS_FULFILLED':
            // console.warn(JSON.stringify(action.payload.detail))
            return {
                ...state,
                isLoading: false,
                detail: action.payload
            }

        case 'DELETE_NEWS_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'DELETE_NEWS_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'DELETE_NEWS_FULFILLED':

            // product = state.data.filter(item => item.id !== action.payload.data.data.id)
            // product.quantity = action.payload.data.data.quantity
            // product.price_order = action.payload.data.data.price_order
            // alert(JSON.stringify(action.payload.data.data.id))

            return {
                ...state,
                isLoading: false,
                // data: action.payload.data
            }


        default:
            return state;
    }
}