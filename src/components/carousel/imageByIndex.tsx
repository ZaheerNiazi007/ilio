import image1 from '../../assets/images/images/img1.jpg'
import image2 from '../../assets/images/images/img12.jpg'
import image3 from '../../assets/images/images/img11.jpg'
import image4 from '../../assets/images/images/img10.jpg'


export const images: string[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
