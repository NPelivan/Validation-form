import React, { Component } from "react";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validPhoneRegex = RegExp(/^[0-9\b]+$/);

function validate(firstName, lastName, adress, phone, email) {
  const errors = [];

  if (firstName.length < 1) {
    errors.push("First name is required");
  } else if (firstName.length === 0) {
    errors.push("First name is equired");
  }

  if (lastName.length < 1) {
    errors.push("Last name is requred");
  } else if (lastName.length === 0) {
    errors.push("Last name is requred");
  }

  if (adress.length < 1) {
    errors.push("Adress is requred");
  } else if (adress.length === 0) {
    errors.push("Adress is required");
  }

  if (!validPhoneRegex.test) {
    errors.push("Phone is in bad format");
  } else if (phone.length === 0) {
    errors.push("Phone is required");
  }

  if (!validEmailRegex.test) {
    errors.push("Email is in bad format");
  } else if (email.length === 0) {
    errors.push("Email is required");
  }

  return errors;
}

export default class Validation extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      adress: "",
      phone: "",
      email: "",

      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { firstName, lastName, adress, phone, email } = this.state;

    const errors = validate(firstName, lastName, adress, phone, email);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h2>Create account</h2>
        <form name="form" action="" method="POST" onSubmit={this.handleSubmit}>
          {errors.map((error) => (
            <p key={error}>Error: {error}</p>
          ))}
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              autoFocus
              onChange={(evt) => this.setState({ firstName: evt.target.value })}
              value={this.state.firstName}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={(evt) => this.setState({ lastName: evt.target.value })}
              value={this.state.lastName}
            />
          </div>

          <div>
            <label htmlFor="adress">Adress</label>
            <input
              type="text"
              name="adress"
              onChange={(evt) => this.setState({ adress: evt.target.value })}
              value={this.state.adress}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              onChange={(evt) => this.setState({ phone: evt.target.value })}
              value={this.state.phone}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(evt) => this.setState({ email: evt.target.value })}
              value={this.state.email}
            />
          </div>

          <div>
            <input
              type="checkbox"
              htmlFor="checkbox"
              name="checkbox"
              required
            />
          </div>

          <div>
            <button
              disabled={
                !(
                  this.state.firstName &&
                  this.state.lastName &&
                  this.state.adress &&
                  this.state.phone &&
                  this.state.email
                )
              }
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
