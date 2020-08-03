import React from "react";

const styles = {
  inline: {
    display: "inline",
  },
};

const Header = () => {
  return (
    <header>
      <h2 style={styles.inline}>Users</h2>
      <button style={styles.inline}>New user</button>
    </header>
  );
};

export default Header;
