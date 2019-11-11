import React from 'react';
import { storiesOf  } from '@storybook/react';
import { results, categories } from '../../utils/data';

import { Footer } from "../../components/Footer/Footer";
import {NavBar} from "../../components/NavBar/NavBar";
import { 
  BodyWrapper,
  BodyContainer,
  BodyRow,
  SearchWrapper,
  Input,
  SearchIconContainer,
  SearchIconItem,
  CategoryContainer,
  CategoryTitle,
  CategoryItem,
  Sepatator,
  ResultsContainer,
  RecommendedWrapper,
  RecommendedContainer,
  Select,
  ResultsGrid,
  SearchContainer,
  Image
} from '../../pages/featured';

storiesOf('Pages|Featured', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Featured',
    () => {
    	return (
    		<div>
    			<label>Featured</label><br />
          <NavBar />
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
          <Footer />
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )