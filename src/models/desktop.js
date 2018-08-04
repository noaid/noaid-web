/**
 * Created by ximing on 2018/8/4.
 */
'use strict';
export default {
    namespace: 'desktop',
    state: { apps: [] },
    reducers: {
        init: {
            success(state, action) {
                return { ...state, ...action.payload };
            },
            error(state) {
                return state;
            }
        }
    },
    actions: {
        init: async () => {}
    }
};
