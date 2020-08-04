import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

require('icons/money.svg');
require('icons/label.svg');
require('icons/statistics.svg');


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
   >ul{
   display:flex;
    >li{
    font-size: 12px;
      width: 33.33333%;
      text-align: center;
      display:flex;
      padding: 4px 0 0 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        width: 32px;
        height: 32px;
      }
    }
   }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className='icon'>
            <use xlinkHref='#label'/>
          </svg>
          <Link to="/tags">
            标签
          </Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref='#money'/>
          </svg>
          <Link to="/money">
            记账</Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref='#statistics'/>
          </svg>
          <Link to="/statistics">
            统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;