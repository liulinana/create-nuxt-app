export const modelB = {
    state : {
        count:0
    },
    //定义动作
    mutations : {//模仿ajax获取新数据后 动态更新data
        increment (state) {
            // 这里的 `state` 对象是模块的局部状态
            state.count++
        }
    }
};