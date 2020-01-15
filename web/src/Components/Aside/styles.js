import styled from "styled-components";

export const Container = styled.aside`
  background: #fff;
  padding: 30px;
  border-radius: 7px;
  width: 40%;
  height: 400px;
  margin-right: 60px;

  p {
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  button {
    height: 54px;
    width: 100%;
    background: #7d40e7;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border-radius: 2px;
    border: 0;
    transition: background 0.5s;
  }

  button:hover {
    background: #6931ca;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputBlock = styled.div`
  margin: 10px 0;

  label {
    display: block;
    font-size: 15px;
    font-weight: bold;
    color: #acacac;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    border: 0;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
