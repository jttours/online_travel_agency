import { connect } from 'react-redux';

function Vacations(state) {
    return (
        <div>
            <h1>THIS IS WHERE WE'LL HAVE THE VACATIONS PAGE FOR THE USERS</h1>
            <h1> WELCOME {state.user.user.user.firstName}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('the state innthe admin vacations component is - ',state);
    return {
      user: state,
    }
  }

export default connect(mapStateToProps)(Vacations);
