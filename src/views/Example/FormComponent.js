import React from "react";

class FormComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Data: ", this.state)
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br />

                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastNameName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br /><br />

                    <input
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

            </>
        )

    }
}

export default FormComponent;