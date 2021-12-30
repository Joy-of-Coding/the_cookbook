import React, { Component } from "react";
import { Chip } from '@mui/material';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("/api/recipe")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <ul sx={{ display: "flex", width: 1}}>
        {this.state.data.map(recipe => {
          return (
            <li key={recipe.id}>
              <Chip label={recipe.name} sx={{my: 2, px: 3, py: 1}} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;