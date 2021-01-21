import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  FirstPageContainer,
  FirstPageContent,
  FirstPageItems,
  FirstPageH1,
  FirstPageP,
  FirstPageBtn
} from './FirstPageElements';

const FirstPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FirstPageContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <FirstPageContent>
        <FirstPageItems>
          <FirstPageH1>Best Arabic Cuisine</FirstPageH1>
          <FirstPageP>Taste of the Middle East</FirstPageP>
          <FirstPageBtn>Place Order</FirstPageBtn>
        </FirstPageItems>
      </FirstPageContent>
    </FirstPageContainer>
  );
};

export default FirstPage;