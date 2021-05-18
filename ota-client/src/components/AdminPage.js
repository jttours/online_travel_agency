import { connect } from 'react-redux';



function AdminPage(state) {
    return (
        <div>
            <h1>THIS WILL BE THE ADMIN ONLY CONTROL PAGE</h1>
            <h1> WELCOME {state.user.user.user.firstName}</h1>
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log('the state innthe admin component is - ',state);
    return {
      user: state,
    }
  }

export default connect(mapStateToProps)(AdminPage);
