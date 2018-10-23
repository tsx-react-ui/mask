export const helper = (function (bodyCls) {
    return {
        afterOpen() {
            if (document.querySelectorAll('.enter-animation').length > 0)
                return;
            document.body.classList.add(bodyCls);
        },
        beforeClose() {
            //mask隐藏时恢复底层滚动，只有在最后一层mask隐藏时处理
            if (document.querySelectorAll('.enter-animation').length !== 1)
                return;
            document.body.classList.remove(bodyCls);
        }
    };
})('mask-show');
//# sourceMappingURL=helper.js.map