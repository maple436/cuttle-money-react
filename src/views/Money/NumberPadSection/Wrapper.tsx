import styled from 'styled-components';

const Wrapper = styled.section`
        display:flex;
        flex-direction: column;
        > .output{
          background:white;
          font-size: 36px;
          line-height: 72px;
          text-align:right;
          padding: 0 16px;
          box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                      inset 0 5px 5px -5px rgba(0,0,0,0.25);
        }
        > .pad{ 
          
          > button{
            font-size: 18px; float: left; width: 25%; height: 64px; border: none;
            &.ok{ height: 128px; float: right; }
            &.zero{ width: 50%; }
            &:nth-child(1){
              background:rgb(241,242,244);
            }
            &:nth-child(2),
            &:nth-child(5) {
              background:rgb(230,231,235);
            }
            &:nth-child(3),
            &:nth-child(6),
            &:nth-child(9) {
              background:rgb(218,221,226);
            }
            &:nth-child(4),
            &:nth-child(7),
            &:nth-child(10) {
              background:rgb(207,210,217);
            }
            &:nth-child(8),
            &:nth-child(11),
            &:nth-child(13) {
              background:rgb(195,200,208);
            }
            &:nth-child(12) {
              background:rgb(172,178,190);
            }
            &:nth-child(14) {
              background:rgb(184,189,199);
            }
          }
        }
`;

export {Wrapper};