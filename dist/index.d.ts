/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Mask
 * Desc The mask component of the react written in Typescript
 * GroupName tsx-react-ui
 */
/// <reference types="node" />
import * as React from 'react';
import { CSSProperties, MouseEventHandler } from 'react';
import './index.scss';
/**
 * @class Mask
 * @extends React.Component
 * @desc Mask Component for mobile
 */
interface MaskProps {
    visible: boolean;
    opacity: number;
    zIndex: number;
    target?: HTMLElement;
    className: string;
    style: CSSProperties;
    onMaskClick?: MouseEventHandler<HTMLDivElement>;
}
interface MaskStates {
    inOutAnimation?: boolean;
}
export default class Mask extends React.Component<MaskProps, MaskStates> {
    static defaultProps: {
        opacity: number;
        zIndex: number;
        className: string;
        style: {};
        onMaskClick: () => void;
    };
    outAnimationTime: NodeJS.Timeout | null;
    constructor(props: MaskProps);
    componentWillReceiveProps(nextProps: MaskProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
