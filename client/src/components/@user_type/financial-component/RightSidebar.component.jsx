import React from 'react'
import styled from 'styled-components'
import Notification from './Notification.component'
import Card from './Card.component'
import Activity from './Activity.component'
import Payment from './Payment.component'
import '../../@user_type/financial-component/FFindex.component.css';

function RightSidebar() {
    return (
        <Section>
            <div className="grid">
            <Notification />
            <Card />
            <Activity />
            <Payment />

            </div>
        </Section>
    )
}

export default RightSidebar
const Section = styled.section`
    position: fixed;
    right: 0;
    top: 0;
    background-color: #ECECF6;
    height: 100vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    gap: 2rem;
    .grid{
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;
