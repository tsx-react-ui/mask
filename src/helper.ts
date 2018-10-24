const controlBodyScroll = (function (): (parm: boolean) => void {
    let bodyEl = document.body
    let top = 0
    return function (isFixed) {
        if (isFixed) {
            top = window.scrollY

            bodyEl.style.position = 'fixed'
            bodyEl.style.top = -top + 'px'
        } else {
            bodyEl.style.position = ''
            bodyEl.style.top = ''

            window.scrollTo(0, top) // 回到原先的top
        }
    }
})()

interface HelperType {
    afterOpen(): void;
    beforeClose(): void;
}
export const helper: HelperType = (function (bodyCls) {

    return {

        afterOpen() {

            if (document.querySelectorAll('.enter-animation').length > 0) return;

            // document.body.classList.add(bodyCls);
            controlBodyScroll(true)

        },

        beforeClose() {

            //mask隐藏时恢复底层滚动，只有在最后一层mask隐藏时处理
            if (document.querySelectorAll('.enter-animation').length !== 1) return;

            // document.body.classList.remove(bodyCls);
            controlBodyScroll(false)

        }

    };

})('mask-show');