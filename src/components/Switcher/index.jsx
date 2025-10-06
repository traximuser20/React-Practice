import React from 'react';

const Switcher = () => {
  const [sw, setSw] = React.useState(false);
  const [theme, setTheme] = React.useState('light');
  return (
    <div className="switcher " id={theme}>
      <button
        onClick={() => {
          setSw(!sw);
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        {sw ? 'Light' : 'Dark'}
      </button>
    </div>
  );
};

Switcher.propTypes = {};

export default Switcher;
