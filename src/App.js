import './App.css';
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className="App">
      {props.data}
      <button onClick={()=>props.increaseNumber()}>Increase Number</button>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    data:state.counter
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    increaseNumber : () => dispatch({type:"INCREASE"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
