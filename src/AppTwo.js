const AppTwo = ({ inc, dec, state }) => {
  return (
    <>
      <button onClick={inc}>Increment</button>
      {state}
      <button onClick={dec}>Decrement</button>
    </>
  );
};

export default AppTwo;
