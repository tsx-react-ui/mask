/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Mask
 * Desc The mask component of the react written in Typescript
 * GroupName tsx-react-ui
 */
import * as React from 'react';
import Portal from '@tsx-react-ui/portal';
import classNames from 'classnames';
import { helper } from './helper';
import './index.scss';
export default class Mask extends React.Component {
    constructor(props) {
        super(props);
        this.outAnimationTime = null;
        this.state = {};
    }
    componentWillReceiveProps(nextProps) {
        //隐藏的时候执行动画
        if (this.props.visible === true && nextProps.visible === false) {
            this.setState({
                inOutAnimation: true
            });
            this.outAnimationTime = setTimeout(() => {
                this.setState({
                    inOutAnimation: false
                });
            }, 300);
        }
        // 标识visible变化：处理遮罩下面可滑动bug, 多个遮罩层叠出现时，只处理最底层遮罩
        if (this.props.visible !== nextProps.visible) {
            try {
                if (nextProps.visible) {
                    helper.afterOpen();
                }
                else {
                    helper.beforeClose();
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    componentWillUnmount() {
        if (this.outAnimationTime !== null) {
            clearTimeout(this.outAnimationTime);
        }
    }
    render() {
        const { visible, opacity, zIndex, style, onMaskClick, children } = this.props;
        const { target, className } = this.props;
        const { inOutAnimation } = this.state;
        const maskClass = classNames('lm-ui-mask', {
            'lm-ui-mask-flex': !className,
            'enter-animation': visible,
            'leave-animation': !visible && inOutAnimation,
            'hide': !visible && !inOutAnimation,
        }, className);
        const maskStyle = Object.assign({}, style, {
            backgroundColor: `rgba(0, 0, 0, ${opacity})`,
            zIndex: zIndex,
        });
        return (React.createElement(Portal, { target: target },
            React.createElement("div", { key: "mask", onClick: onMaskClick, className: maskClass, style: maskStyle }, children)));
    }
}
Mask.defaultProps = {
    opacity: 0.5,
    zIndex: 999,
    className: '',
    style: {},
    onMaskClick: () => { }
};
//# sourceMappingURL=index.js.map