import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {

    state = {
        Name: "",
        Email: "",
        Message: ""
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();

        alert(`Thanks ${this.state.Name}! I'll get back to you as soon as I can. `);
        this.setState({
            Name: "",
            Email: "",
            Message: ""
        });
    };

    render() {
        return (
            <div className="Contact">
                <div className="card">
                    <div className="card-header p-3 mb-2 ">
                        <b className="neon">Contact</b>
                    </div>
                    <div className="card-body p-3 mb-2  text-white">
                        <blockquote className="blockquote mb-0">
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Name"
                                        name="Name"
                                        value={this.state.Name}
                                        onChange={(e) => this.handleInputChange(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        name="Email"
                                        value={this.state.Email}
                                        onChange={(e) => this.handleInputChange(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Leave me a message!"
                                        name="Message"
                                        value={this.state.Message}
                                        onChange={(e) => this.handleInputChange(e)}
                                    />
                                </div>
                                <button
                                    className="btn-lt btn-contact"
                                    onClick={(e) => this.handleFormSubmit(e)}
                                >Submit</button>
                            </form>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    };
};

export default Contact;