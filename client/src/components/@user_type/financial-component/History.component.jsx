import React from 'react';
import styled from 'styled-components';
import '../../@user_type/financial-component/FFindex.component.css';
//import apple from "../assets/avatar.jpg"

function History() {
    return (
        <Section>
        <div className="orders">
      <div className="orders__details">
          <div>
                <h4>History</h4> 
              
          </div>
          <div> 
          <h6>Transection of last months</h6> 
            
          </div>
        </div>
        <div className="orders__table">
            <table>
            <tr>
            {/* <!-- <td><img src={apple} alt="" /></td> --> */}
              <td >Dr. Harshanath Silva</td>
              <td>14:10:32 AM</td> 
              <td>Rs.90 000.00</td>
              <td >Complete</td>
            </tr>
            
            </table>
        </div>
        </div>
        </Section>
    )
}

export default History
const Section = styled.section`

.orders {
    margin-top: 4rem;
    color: black;
    width: 100%;
    .orders__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 1rem ;

        div {
            display: flex;
            gap: 1rem;
           color: grey;
        }
    }
    .orders__table {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        color: grey;
        table {
            border-collapse: collapse;
            width: 100%;
             td {
                text-align: center;
                padding: 5px;
                justify-content: space-evenly;
               
                img{
                height: 2.5rem;
                width: 2.5rem;
                border-radius: 3rem;
            }
                
            }
            
        }
    }
}
`;