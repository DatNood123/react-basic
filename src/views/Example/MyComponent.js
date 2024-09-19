import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Tiến Đạt',
        age: 22,
        gf: 'Pu'
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = (event) => {
        alert("Click làm chó gì")
    }

    render() {
        return (
            <>
                <div className="myName">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleChangeName(event)} style={{ marginRight: "10px" }} ></input>
                    Tên tôi là {this.state.name}
                </div>
                <div className="gfName">
                    Tên người yêu của tôi là {this.state.gf}
                </div>
                <div className="button">
                    <button onClick={() => this.handleClickButton()} > Click me </button>
                </div >
            </>

        )
    }
}

export default MyComponent;