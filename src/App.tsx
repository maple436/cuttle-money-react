import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid red;
    height: 100vh;
    display:flex;
    flex-direction: column;
`;

const Main = styled.div`
  border:1px solid green;
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.nav`
  border:1px solid blue;
   >ul{
   display:flex;
    >li{
      width: 33.33333%;
      text-align: center;
      padding:16px;
    }
   }
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route exact path="/tags">
              <Tags/>
            </Route>
            <Route exact path="/money">
              <Money/>
            </Route>
            <Route exact path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function NoMatch() {
  return <h2>页面不存在，请重新输入地址！</h2>;
}

export default App;
