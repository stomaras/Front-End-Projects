import React from 'react'
import { useEffect } from 'react'
import { MapDispatchToProps, MapStateToProps, connect } from 'react-redux'
import { fetchUsers } from './redux'

interface UserContainerProps  {

}

const UserContainer = (props:any) => {

    const {userData} = props;

    useEffect(() => {
        props.fetchUsers();
    },[])
  return userData.loading ? (
    <h2>Loading...</h2>
  ): userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <section>
        <h2>User List</h2>
        <ul>
            {
                userData && 
                userData?.users && 
                userData?.users.map((user:any) => <li>{user?.name}</li>)
            }
        </ul>
    </section>
  )
}


const mapStateToProps = (state : any) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)