import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class QuizStart extends Component {
    
// constructor(props) {
//     super(props)

//     this.state = {
         
//     }
    //   this.radioChange = this.radioChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
// }


    state = {
    Genre: "GK",
    radio: 'Easy'
    }

    globalvar = {
        Val: this.state.Num
    }
    

    // componentDidMount(){
    //     console.log(this.globalvar)
    // }

    componentDidUpdate(){
        this.globalvar.Val = this.state.Num
        console.log("--------------")
        console.log(this.state)
        console.log(this.globalvar)
    }

    HandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    
    render() {
        return (
        <div>
            <label>Please select level of difficulty</label><br/>
            <div>
            <input type="radio" id="huey" name="radio" onChange={this.HandleChange} value="Easy" />
             <label for="huey">Easy</label>
            </div>
            <div>
            <input type="radio" id="huey" name="radio" onChange={this.HandleChange} value="Medium" checked={this.state.radio === "Medium"} />
             <label for="huey">Medium</label>
            </div>            <div>
            <input type="radio" id="huey" name="radio" onChange={this.HandleChange} value="Difficult" checked={this.state.radio === "Difficult"} />
             <label for="huey">Difficult</label>
            </div>
            <select name="Genre" value={this.state.Genre} onChange={e => this.setState({[e.target.name]: e.target.value}) } id="cars">
                <option value="GK">GK</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Civics">Civics</option>
            </select>
            <button className="otpbutton">
                <Link to={{ pathname: "/quiz", state: this.state }}>Create Quiz</Link>
            </button>    
        </div>
        )
    }
}

export default QuizStart
