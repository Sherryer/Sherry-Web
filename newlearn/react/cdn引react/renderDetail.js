const Hello = (props) => {
  const click = () => {
    console.log(111)
  }
  return <SPAUI.Button onClick={click}>Hello</SPAUI.Button>
}

ReactDOM.render(<Hello data={{ type: 1, content: {}}}/>, document.getElementById('id'));
