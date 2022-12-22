import React, { Component } from "react";
import style from './Searchbar.module.css';

export class Searchbar extends Component {

    state = {
        name: "",
        number: "",
    };

    onDataChange = (event) => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitForm(this.state);
        this.resetForm();
    };

    resetForm = () => {
        this.setState({ name: "", number: "" });
    };

    render() {
        const { number, name } = this.state;

        return (
            <div>
                <form onSubmit={this.onFormSubmit} className={style.form}>
                    <label className={style.formlabel}>
                        Name:
                        <br />
                        <input className={style.forminput}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={this.onDataChange}
                        />
                    </label>
                    <label className={style.formlabel}>
                        Number:
                        <br />
                        <input className={style.forminput}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={this.onDataChange}
                        />
                    </label>
                    <button type="submit" className={style.formbtn}>Add Contact</button>
                </form>
            </div>
        );
    }
}