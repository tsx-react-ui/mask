/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Mask
 * Desc The mask component of the react written in Typescript
 * GroupName tsx-react-ui
 */

import * as React from 'react'
import { CSSProperties, MouseEventHandler } from 'react'
import Portal from '@tsx-react-ui/portal'
import classNames from 'classnames'

import { helper } from './helper'
import './index.scss'


/**
 * @class Mask
 * @extends React.Component
 * @desc Mask Component for mobile
 */

interface MaskProps {
    visible: boolean;      //是否可见
    opacity: number;       //透明度 0-1
    zIndex: number;        //z-index
    target?: () => HTMLElement;  //传递给Protal组件 返回目标插入参数
    className: string;    //Protal组件 class 名
    style: CSSProperties;
    onMaskClick?: MouseEventHandler<HTMLDivElement>;
}
interface MaskStates {
    inOutAnimation?: boolean
}

export default class Mask extends React.Component<MaskProps, MaskStates> {

    static defaultProps = {
        opacity: 0.5,
        zIndex: 999,
        className: '',
        style: {},
        onMaskClick: () => { }
    }
    outAnimationTime: NodeJS.Timeout | null;
    constructor(props: MaskProps) {

        super(props);
        this.outAnimationTime = null;
        this.state = {};
    }

    componentWillReceiveProps(nextProps: MaskProps) {
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

                } else {
                    helper.beforeClose();

                }

            } catch (error) {
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

        const maskClass = classNames({
            'lm-ui-mask': true,
            'enter-animation': visible,   // 修改成更通用的名字，以便重写样式，默认效果为fade
            'leave-animation': !visible && inOutAnimation,
            'hide': !visible && !inOutAnimation
        })

        const maskStyle = Object.assign({}, style, {
            backgroundColor: `rgba(0, 0, 0, ${opacity})`,
            zIndex: zIndex,
        })

        return (
            <Portal className={className} target={target}>
                <div key="mask" onClick={onMaskClick} className={maskClass} style={maskStyle}>

                    {children}

                </div>
            </Portal>
        )

    }

}