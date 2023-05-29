import React from 'react';
import styled from 'styled-components';
import profileImage from "../assets/images/poodle4.jpg"
import LocationIconSvg from "../assets/images/icons/location.svg"
import Carousel from './carousel/Carousel';
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './carousel/Carousel';
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
//   align-items: center;
`;
const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
   align-items: center;
   margin-top:20px;
`;


const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Subheading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;
const Locationddiv = styled.div`
  color: #FFFFFF;
  padding: 6px;
  background: #2BA0C5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const LocationIcon = styled.img`
  filter: brightness(0) invert(1);
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;


const DescriptionHeading = styled.h3`
  font-size: 18px;
  text-align: start;
  margin-bottom: 10px;
  margin-left: 0;
`;
const SellerHeading = styled.h3`
font-size: 18px;
text-align: start;
margin-bottom: 10px;
margin-left: 0;
`;

const Description = styled.p`
  font-size: 16px;

`;

const CardList = styled.div`
  display: flex;
  justify-content: center;
`;

const JoinedTime = styled.span`
padding: 8px;


margin-bottom:10px;
  font-family: 'Inter';
  background: #5A40C7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
 margin-right:80px;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  text-transform: capitalize;
  color: #FFFFFF;
`;
// const AdditionalData = styled.div`
//   position: absolute;

//   left: 1010px;
//   top: 138px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   background: #D32B84;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 8px;
//   padding: 5px;
// `;

const ListingText = styled.div`
padding:8px;
   background: #D32B84;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  border-radius: 8px;
  margin-left:120px;
  color: #FFFFFF;
`;

const OPTIONS: EmblaOptionsType = {containScroll: 'trimSnaps'  }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
console.log(SLIDES)
const Profile: React.FC = () => {
    return (
        <ProfileWrapper>
            <ProfileHeader>
                <JoinedTime>joined 4 mos ago</JoinedTime>

                <ListingText>3 listings</ListingText>

                <Avatar src={profileImage} alt="Avatar" />
                <Subheading>blueberrypoodle</Subheading>

                <Locationddiv> <LocationIcon src={LocationIconSvg} alt="Location Icon" />West Vancouver, British Columbia</Locationddiv>
            </ProfileHeader>
            <DescriptionHeading>Description</DescriptionHeading>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut. Purus in mollis nunc sed. Aliquet nec ullamcorper sit amet risus. In est ante in nibh. Purus semper eget duis at. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Cursus eget nunc scelerisque viverra mauris. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Fames ac turpis egestas integer. Id venenatis a condimentum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Nulla aliquet enim tortor at auctor. Dui vivamus arcu felis bibendum ut tristique et egestas quis.
            </Description>
            <SellerHeading>Seller Listings</SellerHeading>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </ProfileWrapper>
    );
};

export default Profile;
