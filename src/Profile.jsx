import React, {useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { togglenav } from './togglenav';


function Profile() {
    const [state,setState]=useState({
        user:{
            name:'',
            id:'',
            about:'',
            address:'',
            phone:'',
            likes:[],
            dislikes:[]    
        }
    })



    useEffect(()=>{
        fetch(`https://indapi.kumba.io/webdev/assignment`,{
            method:'get',
            headers: {
                'Content-Type':'Application/json'
            }
        })
        .then(response=>{
            return response.json().then(res=>{
                return{status:response.status,data:res}
            })
        })
        .then(res=>{
            setState({...state,...res.data})
        })

    },[])



    const mapStateObjects = e=>e.map(entry=><div className="green wyt py-2 px-3 round">{entry}</div>)


    return (
        <div className="container-fluid min-vh-100">
            <div className="row min-vh-100">
                <Sidebar/>
                <div className="col-lg-8 col-xl-9 py-4 px-lg hashbg">

                        <div className="d-flex justify-content-between">
                            <div className=''>
                            <div className="d-flex h3 font-weight-bold black">
                                <i onClick={()=>togglenav()} className="cursor d-inline d-lg-none fa fa-bars mr-3 mb-3"></i>
                                <div>
                                    Profile
                                    
                                </div>
                            </div>
                            <div className="h2 font-weight-bold">
                                {state.user.name}
                            </div>
                            <div className=" bold greenc font-weight-bold"> {state.user.id} </div>
                            
                            </div>
                        </div>

                        <div> <img src="images/profile.jpg" alt="" className="img-fluid profilepic"/></div>

                        <div className="container-fluid mt-4 p-0">

                            <div className="row">
                                <div className="col-lg round ">
                                    <div className="p-4 wytBg d-flex round">
                                        <i className="fa fa-info-circle icon small"></i>
                                        <div className="ml-3 text">{state.user.about} </div>
                                    </div>

                                    <div className="p-4 wytBg mt-3 d-flex round">
                                        <i className="fa fa-map-marker icon small"></i>
                                        <div className="ml-3 text">
                                            {state.user.address}
                                        </div>
                                    </div>

                                    <div className="p-4 wytBg mt-3 d-flex round">
                                        <i className="fa fa-phone icon small"></i>
                                        <div className="ml-3 text">
                                            {state.user.phone}
                                        </div>
                                    </div>

                                </div>
        
                                <div className="col-lg mg-lg">
                                    <div className='wytBg round p-4'>
                                        <div className="py-4 d-lg-flex bb ">
                                            <div className='font-weight-bold text d-flex align-items-center'>Likes:</div>
                                            <div className="text d-flex justify-content-around flex-grow-1">
                                                {mapStateObjects(state.user.likes)}
                                            </div>
                                        </div>

                                        <div className="py-4 d-lg-flex wytBg bb">
                                            <div className='font-weight-bold d-flex align-items-center text'>Dislikes:</div>
                                            <div className="text d-flex flex-grow-1 justify-content-around">
                                                {mapStateObjects(state.user.dislikes)}
                                            </div>
                                        </div>


                                    </div>

                                </div>
        

                            </div>

                        
                        </div>                    


                    </div>
 


            </div>
        </div>

    );
}

export default Profile;
