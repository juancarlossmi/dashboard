// // Llamamos a los modelos de python desde react

// import axios from 'axios'

// import {
//     GET_BLOG_LIST_SUCCESS,
//     GET_BLOG_LIST_FAIL,
//     GET_BLOG_SUCCESS,
//     GET_BLOG_FAIL,
//     GET_BLOG_LIST_CATEGORIES_SUCCESS,
//     GET_BLOG_LIST_CATEGORIES_FAIL,
//     GET_SEARCH_BLOG_SUCCESS,
//     GET_SEARCH_BLOG_FAIL
// } from "./types"

// export const get_blog_list = () => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     try{
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list`, config)
//         if (res.status === 200) {
//             dispatch ({
//                 type: GET_BLOG_LIST_SUCCESS,
//                 payload: res.data
//             })
//         }else {
//             dispatch ({
//                 type: GET_BLOG_LIST_FAIL
//             })
//         }
//     } catch(err) {
//         dispatch({
//             type: GET_BLOG_LIST_FAIL
//         })        
//     }
// }



// export const get_blog_list_page = (page) => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     try{
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list?p=${page}`, config)
//         if (res.status === 200) {
//             dispatch ({
//                 type: GET_BLOG_LIST_SUCCESS,
//                 payload: res.data
//             })
//         }else {
//             dispatch ({
//                 type: GET_BLOG_LIST_FAIL
//             })
//         }
//     } catch(err) {
//         dispatch({
//             type: GET_BLOG_LIST_FAIL
//         })        
//     }
// }



// export const get_blog_list_category = (slug) => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     try{
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/by_category?slug=${slug}`, config)
//         if (res.status === 200) {
//             dispatch ({
//                 type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
//                 payload: res.data
//             })
//         }else {
//             dispatch ({
//                 type: GET_BLOG_LIST_CATEGORIES_FAIL
//             })
//         }
//     } catch(err) {
//         dispatch({
//             type: GET_BLOG_LIST_CATEGORIES_FAIL
//         })        
//     }
// }



// export const get_blog_list_category_page = (slug, page) => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     try{
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/by_category?slug=${slug}&p=${page}`, config)
//         if (res.status === 200) {
//             dispatch ({
//                 type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
//                 payload: res.data
//             })
//         }else {
//             dispatch ({
//                 type: GET_BLOG_LIST_CATEGORIES_FAIL
//             })
//         }
//     } catch(err) {
//         dispatch({
//             type: GET_BLOG_LIST_CATEGORIES_FAIL
//         })        
//     }
// }



// export const get_blog = (slug) => async dispatch => {
//     const config = {
//         headers:{
//             'Accept': 'application/json'
//         }
//     }
//     try{
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/detail/${slug}`, config)
//         if (res.status === 200) {
//             dispatch ({
//                 type: GET_BLOG_SUCCESS,
//                 payload: res.data
//             })
//         }else{
//             dispatch({
//                 type: GET_BLOG_FAIL
//             })
//         }
//     } catch (err) {
//         dispatch({
//             type:GET_BLOG_FAIL
//         })
//     }
// }



// export const search_blog = (search_term) => async dispatch => {
//     const config = {
//         headers:{
//             'Accept': 'application/json'
//         }
//     }
//     try{
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search/?s=${search_term}`, config)
//         if (res.status === 200) {
//             dispatch ({
//                 type: GET_SEARCH_BLOG_SUCCESS,
//                 payload: res.data
//             })
//         }else{
//             dispatch({
//                 type: GET_SEARCH_BLOG_FAIL
//             })
//         }
//     } catch (err) {
//         dispatch({
//             type: GET_SEARCH_BLOG_FAIL
//         })
//     }
// }


// export const search_blog_page = (search_term, page) => async dispatch => {
//     const config = {
//         headers:{
//             'Accept': 'application/json'
//         }
//     }
//     try{
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search/?s=${search_term}&p=${page}`, config)
//         if (res.status === 200) {
//             dispatch ({
//                 type: GET_SEARCH_BLOG_SUCCESS,
//                 payload: res.data
//             })
//         }else{
//             dispatch({
//                 type: GET_SEARCH_BLOG_FAIL
//             })
//         }
//     } catch (err) {
//         dispatch({
//             type: GET_SEARCH_BLOG_FAIL
//         })
//     }
// }

// import axios from 'axios';
// import {
//     GET_BLOG_LIST_SUCCESS,
//     GET_BLOG_LIST_FAIL,
//     GET_BLOG_SUCCESS,
//     GET_BLOG_FAIL,
//     GET_BLOG_LIST_CATEGORIES_SUCCESS,
//     GET_BLOG_LIST_CATEGORIES_FAIL,
//     GET_SEARCH_BLOG_SUCCESS,
//     GET_SEARCH_BLOG_FAIL
// } from "./types"

// // funcion que se encarga de enlistar la informacion de cada post del blog

// export const get_blog_list = () => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try{

//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list`, config)

//         if(res.status === 200){
//             dispatch({
//                 type: GET_BLOG_LIST_SUCCESS,
//                 payload: res.data
//             });
//         }else{
//             dispatch({
//                 type: GET_BLOG_LIST_FAIL
//             });
//         }

//     }catch(err){
//         dispatch({
//             type: GET_BLOG_LIST_FAIL
//         });
//     }
// }

// // funcion que se encarga de paginar la lista de blogs obtenida

// export const get_blog_list_page = (page) => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try{

//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list?p=${page}`, config)

//         if(res.status === 200){
//             dispatch({
//                 type: GET_BLOG_LIST_SUCCESS,
//                 payload: res.data
//             });
//         }else{
//             dispatch({
//                 type: GET_BLOG_LIST_FAIL
//             });
//         }

//     }catch(err){
//         dispatch({
//             type: GET_BLOG_LIST_FAIL
//         });
//     }
// }

// // funcion que se encarga de extraer las categorias a las que pertenece cada blog

// export const get_blog_list_category = (slug) => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try{

//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/by_category?slug=${slug}`, config)

//         if(res.status === 200){
//             dispatch({
//                 type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
//                 payload: res.data
//             });
//         }else{
//             dispatch({
//                 type: GET_BLOG_LIST_CATEGORIES_FAIL
//             });
//         }

//     }catch(err){
//         dispatch({
//             type: GET_BLOG_LIST_CATEGORIES_FAIL
//         });
//     }
// }

// // funcion que se encarga de paginar las categorias obtenidas por cada post encontrado

// export const get_blog_list_category_page = (slug, page) => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try{

//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/by_category?slug=${slug}&p=${page}`, config)

//         if(res.status === 200){
//             dispatch({
//                 type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
//                 payload: res.data
//             });
//         }else{
//             dispatch({
//                 type: GET_BLOG_LIST_CATEGORIES_FAIL
//             });
//         }

//     }catch(err){
//         dispatch({
//             type: GET_BLOG_LIST_CATEGORIES_FAIL
//         });
//     }
// }

// // funcion que se encarga de detallar la informacion del blog

// export const get_blog = (slug) => async dispatch => {
//     // header de la funcion, es la configuracion principal que se extrae de "application/json"
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/detail/${slug}`, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: GET_BLOG_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: GET_BLOG_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: GET_BLOG_FAIL
//         });
//     }
// }

// // funcion que se encarga de buscar palabras dentro del blog

// export const search_blog = (search_term) => async dispatch => {

//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search?s=${search_term}`, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: GET_SEARCH_BLOG_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: GET_SEARCH_BLOG_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: GET_SEARCH_BLOG_FAIL
//         });
//     }
// };

// // funcion que se encarga de paginar las busquedas realizadas por palabra

// export const search_blog_page = (search_term,page) => async dispatch => {

//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search?p=${page}&s=${search_term}`, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: GET_SEARCH_BLOG_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: GET_SEARCH_BLOG_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: GET_SEARCH_BLOG_FAIL
//         });
//     }
// };



import axios from 'axios';
import {
    GET_BLOG_LIST_SUCCESS,
    GET_BLOG_LIST_FAIL,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL,
    GET_BLOG_LIST_CATEGORIES_SUCCESS,
    GET_BLOG_LIST_CATEGORIES_FAIL,
    GET_SEARCH_BLOG_SUCCESS,
    GET_SEARCH_BLOG_FAIL
} from "./types"

export const get_blog_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list`, config)

        if(res.status === 200){
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_LIST_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_BLOG_LIST_FAIL
        });
    }
}

export const get_blog_list_page = (page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list?p=${page}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_LIST_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_BLOG_LIST_FAIL
        });
    }
}

export const get_blog_list_category = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/by_category?slug=${slug}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_BLOG_LIST_CATEGORIES_FAIL
        });
    }
}

export const get_blog_list_category_page = (slug, page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/by_category?slug=${slug}&p=${page}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_BLOG_LIST_CATEGORIES_FAIL
        });
    }
}

export const get_blog = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/detail/${slug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BLOG_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_BLOG_FAIL
        });
    }
}

export const search_blog = (search_term) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search?s=${search_term}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_SEARCH_BLOG_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SEARCH_BLOG_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_SEARCH_BLOG_FAIL
        });
    }
};

export const search_blog_page = (search_term,page) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search?p=${page}&s=${search_term}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_SEARCH_BLOG_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SEARCH_BLOG_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_SEARCH_BLOG_FAIL
        });
    }
};