import * as React from 'react'
import Mask from '../src/index'
import './index.scss'

export default class App extends React.Component {

    constructor(args, context){
        super(args);

        this.state = {
            content: 'Click and change color 😜'
        }
    }


    render() {
        return (
            <section className="container">
                <Mask {...this.state} />
            </section>
        )
    }
}
