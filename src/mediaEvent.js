import Vue from 'vue';

export default class mediaEvent {
    constructor (mediaquery, log) {
        if (!this.check(log)) return null;
        this.mql = window.matchMedia(mediaquery);
    }

    check (log) {
        log = log || console.log;        
        let canUse = false;
        if(!!window.matchMedia) {
            canUse = true;
        }
        return canUse;
    }

    listen () {
        this.mql.addListener((mql) => {
            if(mql.matches) {

            } else {
                
            }
        })
    }
}