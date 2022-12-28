import React, { Component } from 'react';
import style from './Searchbar.module.css';
import { ReactComponent as Search } from 'components/icons/search.svg';

export class Searchbar extends Component {
  state = {
    searchInput: '',
  };

  onDataChange = event => {
    this.setState({ searchInput: event.currentTarget.value.toLowerCase() });
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchInput.trim() === '') {
      return;
    }
    this.props.onSubmitForm(this.state.searchInput);
  };

  resetForm = () => {
    this.setState({ searchInput: '' });
  };

  render() {
    const { searchInput } = this.state;

    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.onFormSubmit}>
          <button type="submit" className={style.SearchFormButton}>
            <Search width="20" />
          </button>

          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchInput}
            onChange={this.onDataChange}
          />
        </form>
      </header>
    );
  }
}
