import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react'
import imageByIndex from './imageByIndex'
import "../../App.css"
import styled from 'styled-components';


type DotButtonPropType = {
  selected: boolean;
  onClick: () => void;
};
const ButtonSpace = styled.div`
  width: 10px;
`;

const EmblaButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ImageText = styled.div`
  margin-top: 10px;
  margin-left:10px
`;
const Locationcomponent = styled.div`
 
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  
  text-transform: capitalize;
  
  color: #292F3F;
`;
const Pricecomponent = styled.div`
  font-family: 'Inter';
  font-style: normal;

  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  
  color: #292F3F;
`;
const Namecomponent = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  text-transform: capitalize;
  
  color: #292F3F;
`;

const SliderButton = styled.button`
  position: absolute;
  width: 38px;
  height: 30px;
  left: 30px;
  top: 10px;
  background: #5A40C7;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 2;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px; /* Adjust the gap value to control the spacing */
`;
const GenderButton = styled.button`
  position: absolute;
  width: 38px;
  height: 30px;
  left: 80px;
  top: 10px;
  background: #D32B84;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 2;
`;
const SevenWButton = styled.button`
  position: absolute;
  width: 38px;
  height: 30px;
  left: 130px; /* Adjust the left value as per your spacing requirements */
  top: 10px;
  background: #2BA0C5;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 2;
`;
const HeartIcon = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;

  right: 30px; /* Adjust the left value as per your spacing requirements */
  top: 18px; /* Adjust the top value as per your positioning requirements */
  filter: brightness(0) invert(1);
  z-index: 2;
`;


export const DotButton: React.FC<DotButtonPropType> = (props) => {
  const { selected, onClick } = props;

  return (
    <button
      className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
      type="button"
      onClick={onClick}
    />
  );
};

type PrevNextButtonPropType = {
  enabled: boolean;
  onClick: () => void;
};

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      onClick={onClick}
      disabled={!enabled}
    >
      <svg className='embla__button__svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="left-arrow">
          <g id="1 - Light / chevron-circle-left">
            <path id="chevron-circle-left-Light" d="M13.354 9.35303L10.707 12L13.353 14.646C13.548 14.841 13.548 15.158 13.353 15.353C13.255 15.451 13.127 15.499 12.999 15.499C12.871 15.499 12.743 15.45 12.645 15.353L9.64502 12.353C9.45002 12.158 9.45002 11.841 9.64502 11.646L12.645 8.646C12.84 8.451 13.157 8.451 13.352 8.646C13.547 8.841 13.549 9.15803 13.354 9.35303ZM21.5 12C21.5 17.238 17.238 21.5 12 21.5C6.762 21.5 2.5 17.238 2.5 12C2.5 6.762 6.762 2.5 12 2.5C17.238 2.5 21.5 6.761 21.5 12ZM20.5 12C20.5 7.313 16.687 3.5 12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12Z" fill="black" />
          </g>
        </g>
      </svg>

    </button>
  );
};

export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      className="embla__button embla__button--next"
      onClick={onClick}
      disabled={!enabled}
    >
      <svg className='embla__button__svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="right-arrow">
          <g id="1 - Light / chevron-circle-right">
            <path id="chevron-circle-right-Light" d="M12 2.5C6.762 2.5 2.5 6.762 2.5 12C2.5 17.238 6.762 21.5 12 21.5C17.238 21.5 21.5 17.238 21.5 12C21.5 6.762 17.238 2.5 12 2.5ZM12 20.5C7.313 20.5 3.5 16.687 3.5 12C3.5 7.313 7.313 3.5 12 3.5C16.687 3.5 20.5 7.313 20.5 12C20.5 16.687 16.687 20.5 12 20.5ZM14.354 11.646C14.549 11.841 14.549 12.158 14.354 12.353L11.354 15.353C11.256 15.451 11.128 15.499 11 15.499C10.872 15.499 10.744 15.45 10.646 15.353C10.451 15.158 10.451 14.841 10.646 14.646L13.292 12L10.646 9.354C10.451 9.159 10.451 8.84197 10.646 8.64697C10.841 8.45197 11.158 8.45197 11.353 8.64697L14.354 11.646Z" fill="black" />
          </g>
        </g>
      </svg>

    </button>
  );
};





type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <>
      <EmblaButtons>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <ButtonSpace />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </EmblaButtons>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <><div className="embla__slide" key={index}>
               
                <img
                  className="embla__slide__img"
                  src={imageByIndex(index)}
                  alt="Your alt text" />
                <ButtonContainer>  <SliderButton>
                  AD
                </SliderButton>
                  <GenderButton>
                    F
                  </GenderButton>
                  <SevenWButton>7W</SevenWButton>
                  <HeartIcon viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <g id="4 - Filled / heart">
                      <path id="heart-Filled" d="M21.3694 10.562C20.4144 15.458 15.3954 18.8969 13.2824 20.1489C12.8864 20.3819 12.4434 20.5 12.0004 20.5C11.5574 20.5 11.1144 20.3829 10.7184 20.1489C8.60441 18.8969 3.58543 15.459 2.63043 10.562C2.23143 8.51501 2.77443 6.34488 4.08343 4.75488C5.28143 3.30088 6.94643 2.5 8.77243 2.5C9.92143 2.5 11.0304 2.79099 12.0004 3.34399C12.9704 2.79099 14.0794 2.5 15.2284 2.5C17.0544 2.5 18.7194 3.30088 19.9174 4.75488C21.2254 6.34488 21.7684 8.51501 21.3694 10.562Z" fill="black" />
                    </g>


                  </HeartIcon>

                </ButtonContainer>

                <ImageText>
                 <Locationcomponent>Toronto,On</Locationcomponent> 
        
                 <Namecomponent>poodle</Namecomponent>

                 <Pricecomponent>$ 2600</Pricecomponent> 

   

                </ImageText>
              </div></>

            ))}
          </div>
        </div>


      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  )
}

export default EmblaCarousel
