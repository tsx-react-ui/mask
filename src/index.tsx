/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Mask
 * Desc The mask component of the react written in Typescript
 * GroupName tsx-react-ui
 */

import * as React from 'react'
import { CSSProperties, MouseEventHandler } from 'react'
import * as PropTypes from 'prop-types'

import classNames from 'classnames'
import './index.scss'


/**
 * @class Mask
 * @extends React.Component
 * @desc Mask Component for mobile
 */

interface MaskProps {
    content: string;
    styles ?: CSSProperties;
    handle ?: MouseEventHandler<HTMLDivElement>;
}

interface MaskStates {
    isActive: boolean;
}

export default class Mask extends React.Component <MaskProps, MaskStates> {

    static propTypes = {
        /**
         * 主内容
         */
        content: PropTypes.string.isRequired
    };

    static defaultProps = {
        content: 'React test demo'
    };

    /**
     * @constructor
     */
    constructor(props: MaskProps) {
        super(props);

        this.state = {
            isActive: false
        }

        this.handle = this.handle.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handle(){
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render () {

        let {
            content
        } = this.props;
        let {
            isActive
        } = this.state;

        let customClassName = classNames({
            active: isActive,
            btn: true,
        });

        return (
            <div>
                <div className={customClassName} onClick={this.handle}> {content} </div>
            </div>
        )
    }

}
