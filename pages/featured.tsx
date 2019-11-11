import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { Footer } from "../components/Footer/Footer";
import {NavBar} from "../components/NavBar/NavBar";

import { results, categories } from "../utils/data";

const Index = () => (
  <>
    <NavBar />
    <Body />
    <Footer />
  </>
);

export default Index;

const Body = () => (
  <BodyWrapper>
    <BodyContainer>
      <BodyRow>
        <SearchContainer>
          <SearchWrapper>
            <Input placeholder="Try 'Brett Favre' or 'Real Housewives" />
            <SearchIconContainer>
              <SearchIconItem fontSize="large" />
            </SearchIconContainer>
          </SearchWrapper>
        </SearchContainer>
      </BodyRow>
      <BodyRow>
        <CategoryContainer>
          <CategoryTitle>Categories</CategoryTitle>
          {categories.map((category, i) => {
            const { name, amount } = category;
            if (i === 8) {
              return <Sepatator key={i} />;
            }
            return <CategoryItem key={i} name={name} amount={amount} />;
          })}
        </CategoryContainer>
        <ResultsContainer>
          <RecommendedWrapper>
            <RecommendedContainer>
              <Select>
                <option selected value="">
                  Recommended
                </option>
                <option value={10}>Price High to Low</option>
                <option value={20}>Price Low to High</option>
                <option value={30}>Alphabet A-Z</option>
                <option value="">Response Time (fastest to slowest)</option>
              </Select>
            </RecommendedContainer>
          </RecommendedWrapper>
          <ResultsGrid>
            {results.map((item, i) => (
              <Image
                key={i}
                price={item.price}
                image={item.image}
                title={item.title}
                name={item.name}
                tags={item.tags}
              />
            ))}
          </ResultsGrid>
        </ResultsContainer>
      </BodyRow>
    </BodyContainer>
  </BodyWrapper>
);

export const BodyWrapper = styled.div`
  margin-top: 0;
  padding-top: 70px;
`;

export const BodyContainer = styled.div.attrs({ className: "container" })`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  font-size: 18px;
`;

export const Title = styled.h3`
  margin-top: 0;
  font-weight: 700;
  font-size: 25px;
  margin-right: 10px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
`;

export const CategoryTitle = styled.h3`
  margin-top: 0;
  font-weight: 700;
  font-size: 25px;
  margin-right: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const BodyRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  padding-bottom: 16px;
  margin-top: 24px;
  position: relative;
`;

export const SearchWrapper = styled.div`
  margin-bottom: 15px;
  box-shadow: 0 1px 13px -4px hsla(0, 0%, 58%, 0.26);
  background-color: #fff;
  border: 1px solid hsla(0, 0%, 59.2%, 0.15);
  position: relative;
`;

export const Input = styled(TextField)`
  width: 100%;
  input {
    &:focus {
      box-shadow: inset 0 -2px 0 #337ab7;
    }
    line-height: 1.3;
    font-size: 24px;
    width: 100%;
    height: 30px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    padding: 26px 0 26px 56px;
  }
`;
export const SearchIconContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 20px;
  height: 40px;
`;

export const SearchIconItem = styled(SearchIcon)`
  height: 100%;
  color: #fa005c;
`;

export const CategoryContainer = styled.div.attrs({
  className: "w-1/6 sm:w-1/6 md:w-2/6 lg:w-1/6 xl:w-1/6"
})`
  padding-bottom: 16px;
  margin-top: 13px;

  @media (max-width: 1024px) {
    display: flex;
    position: relative;
    padding-top: 12px;
    padding-bottom: 0;
    overflow-x: scroll;
    white-space: nowrap;
    border-radius: 4px;
    width: 100% !important;
  }
`;
export const Select = styled.select`
  border: 0;
  border-radius: 0;
  appearance: none;
  width: 100%;
  height: 38px;
  padding: 6px 16px;
  box-shadow: inset 0 -1px 0 #ddd;
  font-size: 16px;
  line-height: 1.5;
  background: transparent;
`;
export const ResultsContainer = styled.div.attrs({ className: "w-5/6" })`
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    width: 100% !important;
  }
`;

export const RecommendedWrapper = styled.div`
  margin-bottom: 16px;
`;

export const RecommendedContainer = styled.div.attrs({
  className: "w-1/3 ml-auto"
})`
  div {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100% !important;
  }

  position: relative;

  &:after {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    top: 20px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
  }
`;

export const ResultsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Sepatator = styled.div`
  height: 1px;
  width: 90%;
  border-left: none;
  border-bottom: 1px solid #ececec;
  margin: 16px 0 24px 5%;
`;

export const CategoryItem = ({ name, amount }) => (
  <CategoryLink href="#">
    <CategoryLinkName>{name}</CategoryLinkName>
    <CategoryLinkAmount>({amount})</CategoryLinkAmount>
  </CategoryLink>
);

export const CategoryLink = styled.a`
  width: 100%;
  padding: 9px 18px;
  margin: 0 12px 7px 0;
  display: inline-block;
  transition: all 0.2s;

  &:nth-of-type(1) {
    background-color: #fa005c;

    span {
      color: #fff !important;
    }
  }

  &:active {
    background-color: #fa005c;
  }
  border-radius: 30px;
  box-sizing: border-box;
  color: #4d4d4d;
  background-color: #f7f7f7;

  &:hover {
    background-color: #ececec;
  }
`;

export const CategoryLinkName = styled.span`
  color: #4d4d4d;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 3px;
`;

export const CategoryLinkAmount = styled.span`
  color: #a1a1a1;
`;

export const Image = ({ price, image, title, name, tags }) => (
  <GridImageWrapper>
    <GridImageContainer>
      <Price>{price}</Price>
      <ImageItem>
        <img src={image} alt="image" />
      </ImageItem>
      <ImageContent>
        <SmallTitle>{title}</SmallTitle>
        <Title>{name}</Title>
        <div className="flex" style={{display: "flex"}}>
          {tags.length > 0 &&
            tags.map((tag, i) => (
              <SmallTitle key={i} bottom>
                {tag}
              </SmallTitle>
            ))}
        </div>
      </ImageContent>
    </GridImageContainer>
  </GridImageWrapper>
);

export const GridImageWrapper = styled.div.attrs({
  className: "lg:w-1/3 xl:w-1/4"
})`
  margin-bottom: 20px;
  min-height: 170px;
  max-height: 350px;
  padding-right: 5px !important;
  padding-left: 5px !important;
  min-width: 145px;
  width: 32% !important;

  @media (max-width: 1024px) {
    width: 32% !important;
  }

  @media (max-width: 500px) {
    width: 50% !important;
    min-height: auto;
    height: auto;
    min-width: auto;
  }
`;

export const GridImageContainer = styled.div`
  box-shadow: 4px 4px 17px hsla(0, 0%, 85.9%, 0.5);
  position: relative;
  background-size: cover;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 5px;
  /* cursor: pointer; */
  height: 100%;
  @media (max-width: 500px) {
    height: auto;
  }
  &:hover {
    transform: translateY(-3px);
  }
`;

export const Price = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 1px 14px;
  position: absolute;
  right: 11px;
  top: 11px;

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

export const ImageItem = styled.div`
  background: #eee;
  height: 70%;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    position: relative;
    padding: 60% 50%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
`;

export const ImageContent = styled.div`
  height: 30%;
  width: 100%;
  padding: 10px 12px;
  @media (max-width: 768px) {
    .flex {
      display: none
    }
  }
`;

export const SmallTitle = styled.a`
  color: #6c6c6c;
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  &:after {
    font-size: 13px;
    content: "•";
    padding: 0 3px;
    display: ${props => (props.bottom ? "inline-block" : "none")};
  }

  &:hover {
    text-decoration: ${props => (props.bottom ? "underline" : null)};
  }
`;

export const FlatAppBar = styled(AppBar)`
  box-shadow: none;
`;

export const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.img.attrs({ src: "/logo-cropped.png" })`
  max-height: 50px;
  margin: 0;
`;
