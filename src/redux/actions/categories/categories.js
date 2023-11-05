// // estas acciones contienen las funciones que hacen llamados a la api django

// // con axios importamos los tipos
// import axios from 'axios';
// import {
//     GET_CATEGORIES_SUCCESS,
//     GET_CATEGORIES_FAIL,

// } from './types';

// //  funcion asincrona, cunado buscamos algun post el resultado es instantaneo debio al postgresql 

// export const get_categories = () => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };
//     try{
//         // llamado del api por medio de un get request
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/list`, config)
//         if(res.status === 200) {
//             dispatch({
//                 type:GET_CATEGORIES_SUCCESS,
//                 // Envia la informacion de res.data al servidor
//                 payload: res.data
//             })
//         }else {
//             dispatch({
//                 // si falla es porque no existe la categoria
//                 type: GET_CATEGORIES_FAIL
//             })
//         }

//     } catch(err) {
//         dispatch({
//             type: GET_CATEGORIES_FAIL
//         })
//     }
// }


// import axios from 'axios';
// import {
//     GET_CATEGORIES_SUCCESS,
//     GET_CATEGORIES_FAIL,
// } from './types';


// export const get_categories = () => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try{

//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/list`, config)

//         if(res.status === 200){
//             dispatch({
//                 type: GET_CATEGORIES_SUCCESS,
//                 payload: res.data
//             });
//         }else {
//             dispatch({
//                 type: GET_CATEGORIES_FAIL
//             });
//         }

//     } catch(err){
//         dispatch({
//             type: GET_CATEGORIES_FAIL
//         })
//     }
// }


import axios from 'axios';
import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
} from './types';


export const get_categories = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/list`, config)

        if(res.status === 200){
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else {
            dispatch({
                type: GET_CATEGORIES_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_CATEGORIES_FAIL
        })
    }
}