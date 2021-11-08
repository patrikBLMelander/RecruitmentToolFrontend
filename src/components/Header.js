import React from 'react';

export default class Header extends React.Component {
    render() {
      return (
        <div style={styles.header}>
            <p>Header placeholder</p>

        </div>
        )
    }   
}

const styles ={

    header: {
    display: 'flex',
    backgroundColor: "red",
    hight: 400,
    paddingTop: '16px',
    textDecoration: "none",
    marginLeft: 160,
    marginTop: 0,
    overflow: "hidden",
    marginBottom: 8
    }
}
