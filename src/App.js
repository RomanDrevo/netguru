import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {inject, observer} from "mobx-react";

@inject('testStore')
@observer
class App extends Component {

    componentDidMount() {
        const {testStore} = this.props

        console.log('testStore: ', testStore)

        testStore.getPosts()
    }

    render() {
        const {testStore} = this.props

        if (testStore.isLoading)
            return <div>Loading...</div>


        return (
            <div className="App">
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<p>*/}
                        {/*Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    {/*<a*/}
                        {/*className="App-link"*/}
                        {/*href="https://reactjs.org"*/}
                        {/*target="_blank"*/}
                        {/*rel="noopener noreferrer"*/}
                    {/*>*/}
                        {/*Learn React*/}
                    {/*</a>*/}
                {/*</header>*/}

                {
                    testStore.posts.map(post => <h2 key={post.id}>{post.name}</h2>)
                }
            </div>
        );
    }
}

export default App;
