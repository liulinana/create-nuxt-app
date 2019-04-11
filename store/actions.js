import store from '../store/index';
function makeAction(type,arg) {
    // ({dispatch}) =>{dispatch(type)}
    store().commit(type,arg);
};

export const listsCounter = (type,arg) => makeAction(type,arg);

export const increaseCounter = (type,arg) => makeAction(type,arg);

export const reduceCounter = (type) => makeAction(type);

// actions: {
//     actionA ({ commit }) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 commit('someMutation')
//                 resolve()
//             }, 1000)
//         })
//     }
// }
