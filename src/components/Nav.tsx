import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  display: flex;
 
   
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
      <Link to="/tags" className='item'>
        <Icon name='label'/>
        <span>标签</span>
      </Link>
      <Link to="/money" className='item'>
        <Icon name='money'/>
       <span>记账</span>
      </Link>
      <Link to="/statistics" className='item'>
        <Icon name='statistics'/>
       <span>统计</span>
      </Link>
    </NavWrapper>
  );
};

export default Nav;