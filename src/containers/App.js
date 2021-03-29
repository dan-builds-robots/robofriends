import React, {Component} from 'react';
import CardList from '../components/CardList.js'
import { robots } from '../robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users})) //this.setState({ robots: users})
    }

    onSearchChange = (event) => {
        // console.log(event)
        this.setState( {searchField: event.target.value} )
    }

    render() {
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase()) || 
            robot.email.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ?
            <h1 style={{alignItems: 'center', textAlign: 'center', float: .5, color:'white'}}>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 style={{color: '#FFF'}}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
    }
}

export default App;