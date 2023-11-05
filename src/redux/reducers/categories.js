// import {
//     GET_CATEGORIES_SUCCESS,
//     GET_CATEGORIES_FAIL,
// } from '../actions/categories/types'

// // Estado inicial que guardara las categorias, en principio el estado se encontrara vacio
// const initialState = {
//     categories: null
// }
// // Esta funcion declara el estado inicial y la accion de la funcion
// export default function categories(state = initialState, action) {
//     // type = es el valor de la accion completada puede ser success o fail payload = informacion que sera enviada al servidor
//     const {type, payload} = action;
//     // 
//     switch(type) {
//         case GET_CATEGORIES_SUCCESS:
//             return {
//                 ...state,
//                 categories: payload.categories
//             }
//         case GET_CATEGORIES_FAIL:
//             return {
//                 ...state,
//                 categories: null
//             }
//         default:
//             return state
//     }
// }

// // import {
// //     GET_CATEGORIES_SUCCESS,
// //     GET_CATEGORIES_FAIL,
// // } from '../actions/categories/types'

// // const initialState = {
// //     categories: null
// // }

// // export default function categories(state=initialState,action){
// //     const { type, payload } = action;

// //     switch(type){
// //         case GET_CATEGORIES_SUCCESS:
// //             return {
// //                 ...state,
// //                 categories: payload.categories
// //             }
// //         case GET_CATEGORIES_FAIL:
// //             return {
// //                 ...state,
// //                 categories: null
// //             }
// //         default:
// //             return state
// //     }
// // }


import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
} from '../actions/categories/types'

const initialState = {
    categories: null
}

export default function categories(state=initialState,action){
    const { type, payload } = action;

    switch(type){
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload.categories
            }
        case GET_CATEGORIES_FAIL:
            return {
                ...state,
                categories: null
            }
        default:
            return state
    }
}