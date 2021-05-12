import React,{useState,useEffect} from 'react';
import Sidebar from './sidebar';
import { togglenav } from './togglenav';



function OrderSummary() {

    const [state,setState]=useState({
        items:[],
        order_id:'',
        restaurant:{
            name:'',
            street:'',
            city:'',
            zipcode:'',
        }
    })

    const computetotal = ()=>{
        let total = 0;
        state.items.map((item)=>total+=item.price)
        return total
    }

    const computetax = ()=>{
        let total = 0
        state.items.map((item)=>total+=((2.5/100)*item.price))
        return total
    }


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



    const imgurls = ['veggie-burger.jpg','chicken-burger.jpg','paneer-chilli.jpg','steak.jpg']

    return (
            <div className="container-fluid min-vh-100">

                <div className="row min-vh-100">
                    <Sidebar/>
                    <div className="col-lg-8 col-xl-9 py-4 px-lg   hashbg">

                        <div>
                            <div className="d-flex h2 font-weight-bold  black">
                                <i onClick={()=>togglenav()} className="d-inline d-lg-none cursor fa fa-bars mr-3 mb-3"></i>
                                <div>
                                    Order Summary
                                
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="d-flex bold greenc font-weight-bold">
                                <div className="text d-flex align-items-center">Order ID:</div>
                                <div className="greenc ml-2">{state.order_id}</div>
                            </div>

                        </div>
                        <div className="mx-auto ">
                            {
                            state? 
                            state.items.map((entry,i)=>{
                                    return(
                                        <div key={i} className="mt-2 d-lg-flex py-2 justify-content-between order-row">
                                            <div className="d-flex">
                                                <div className='order-img'>
                                                    <img src={`images/${imgurls[i]}`} className='img-fluid' alt="veggie-burger"/>
                                                </div>


                                            </div>
                                            <div className="midtext font-weight-bold black">{entry.name}</div>
                                            <div className=''>
                                                <div className="midtext font-weight-bold black">X {entry.quantity}</div>
                                            </div>
                                            <div className="midtext font-weight-bold black ">Category: {entry.category}</div>

                                            <div className="">
                                                <div className="h5 font-weight-bold">
                                                    {entry.price + ((entry.tax_pct)/100 * entry.price )} {entry.currency}
                                                    <span className="text greeenc ml-1">(+{entry.tax_pct}% Tax)</span>
                                                </div>
                                            </div>



                                        </div>



                                    )
                                }):null
                            }
                            <div className="d-flex mg-lg justify-content-end">
                                <div className="midtext font-weight-bold d-flex align-items-center">Items Total:</div>
                                <div className="h5 ml-2 font-weight-bold d-flex align-items-center">{computetotal()} INR</div>
                            </div>  
                            <div className="d-flex justify-content-end ">
                                <div className="midtext font-weight-bold d-flex align-items-center">Total tax:</div>
                                <div className="h5 ml-2 font-weight-bold d-flex align-items-center">{computetax()} INR</div>
                            </div>  
                            <div className="d-flex mt-2 justify-content-end ">
                                <div className="midtext font-weight-bold d-flex align-items-center">Total Charge:</div>
                                <div className="h4 ml-2 font-weight-bold d-flex align-items-center">{computetax() + computetotal()} INR</div>
                            </div>  

                        </div>                    
                        <div className="mt-5">
                            <div className="h5 font-weight-bold">Thanks for eating with us</div>
                            <div className="midtext text">{state.restaurant.name}</div>
                            <div className="text hash">{state.restaurant.street},{state.restaurant.city},{state.restaurant.state}</div>
                        </div>


                        </div>

                </div>
            </div>


  );
}

export default OrderSummary;
