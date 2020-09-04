import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  background: #ffffff;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  display: flex;
 
   >.selected{
    color:black;
    .icon{
    fill:rgb(254,217,67);
    }
   }
    >.item{
      font-size: 12px;
      width: 33.33333333333333333%;
      text-align: center;
      display:flex;
      padding: 4px 0 2px 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      >span{
      line-height: 12px;
      }
    
      .icon{
        width: 32px;
        height: 32px;
      }
    }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink  to="/tags" className='item' activeClassName="selected">
        <Icon name='label'/>
        <span>标签</span>
      </NavLink>
      <NavLink to="/money" className='item' activeClassName="selected">
        <Icon name='money'/>
       <span>记账</span>
      </NavLink>
      <NavLink to="/statistics" className='item' activeClassName="selected">
        <Icon name='statistics'/>
       <span>统计</span>
      </NavLink>
    </NavWrapper>
  );
};

export default Nav;