import styled from "styled-components";
import {useNavigate} from 'react-router-dom'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import './style.css'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  const navigate = useNavigate()
  return (
    <Container>
      <LazyLoadImage className="image" width={'100%'} height={'100%'} src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={()=>navigate(`/products/${(item.title).toLowerCase()}`)}>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
