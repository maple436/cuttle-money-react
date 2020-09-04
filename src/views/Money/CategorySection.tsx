import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
      font-size: 24px;
        > ul{
          display:flex;
          > li {
            width: 50%; 
            text-align:center;
            padding: 16px 0;
            position:relative;
            background: black;
            color:rgb(254,217,67);
            &.selected{
            background:rgb(254,217,67);
            color:black;
            }
          }
        }
`;

type Props = {
  value: '-' | '+' ;
  onChange: (value:'-'|'+') => void;
}
const CategorySection: React.FC<Props> = (props) => {
  const [categoryList] = useState<('-'|'+')[]>(['-', '+']);
  const category=props.value;
  const categoryMap={'-':'支出','+':'收入'};

  return (
    <Wrapper>
      <ul>
        {
          categoryList.map(c=>
            <li key={c} className={category===c?'selected':''}
            onClick={()=>{props.onChange(c)}}>{categoryMap[c]}</li>)
        }
      </ul>
    </Wrapper>
  );
};

export {CategorySection};