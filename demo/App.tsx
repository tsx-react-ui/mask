import * as React from 'react'
import Mask from '../dist/index'
import './index.scss'

interface AppStates {
    visible: boolean
}

export default class App extends React.Component<{}, AppStates> {

    constructor(props, context) {
        super(props);

        this.state = {
            visible: false
        }

        this.clickHandler = this.clickHandler.bind(this);
        this.clickHideauto = this.clickHideauto.bind(this);
    }

    showControl() {
        this.setState({
            visible: !this.state.visible
        })
    }
    clickHideauto() {
        this.showControl()
        setTimeout(() => {
            this.showControl()
        }, 2000)
    }
    clickHandler() {
        this.showControl()
    }

    render() {
        const arr = [];
        for (let i = 0; i < 100; i++) arr.push(i);

        const list = arr.map((item, i) => {
            return (
                <div key={i}>{item}</div>
            )
        })
        return (
            <section className="container">
                {list}
                <button className="btn" onClick={this.clickHideauto}> show mask,hide 2s later</button>
                <button className="btn" onClick={this.clickHandler}> show mask,show until clicked </button>
                <Mask visible={this.state.visible} opacity={0.3} zIndex={9} onMaskClick={() => this.setState({ visible: false })}>
                    <div>This is content</div>
                </Mask>

            </section>
        )
    }
}
