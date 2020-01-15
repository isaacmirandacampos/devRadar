import styled from "styled-components";

export const Profile = styled.li`
  width: 100%;
  height: 200px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;

    img {
      height: 54px;
      width: 54px;
      border-radius: 50%;
    }

    div {
      margin-left: 10px;
      display: flex;
      flex-direction: column;

      strong {
        color: #333;
        font-size: 16px;
      }

      span {
        color: #999;
        font-size: 13px;
        margin-top: 2px;
      }
    }
  }

  p {
    font-size: 14px;
    color: #666;
    margin: 10px 0;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  a {
    color: #8e4dff;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.5s;
  }

  a:hover {
    color: #5a2ea6;
  }
`;
