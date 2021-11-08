import React from 'react';

export default class HeadeNavbar extends React.Component {
    render() {
      return (
        <div style={styles.navbar}>
            <p>test</p>

        </div>
        )

   
    }
}

const styles = {
    navbar: 
    {
        position: 'fixed',
        backgroundColor: 'green',
        height: "100%",
        width: 160,
        zIndex: 1,
        top: 0,
        left: 0,
        overflowX: "hidden",
        paddingTop: '16px'
    }
}

