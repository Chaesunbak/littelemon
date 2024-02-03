import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import kimImage from '../images/customer1.jpg';
import samuelmage from '../images/customer2.jpg';
import donaldImage from '../images/customer3.jpg';
import xiImage from '../images/customer4.jpg';

const reviews = [
    {
      id: 1,
      name: 'Kim',
      image: kimImage,
      rating: '5.0',
      review: "The exquisite flavors and impeccable presentation made our dining experience truly unforgettable!"
      ,
    },
    {
      id: 2,
      name: 'Samuel',
      image: samuelmage,
      rating: '4.5',
      review: "Exceptional service, cozy ambiance, and a diverse menu that catered to every palate – a delightful culinary journey!",
    },
    {
      id:3,
      name: 'Donald',
      image: donaldImage,
      rating: '5.0',
      review: "From the first bite to the last, each dish showcased the chef's skill and passion for creating culinary masterpieces.",
    },
    {
      id:4,
      name: 'Xi',
      image: xiImage,
      rating: '4.0',
      review: "A perfect blend of flavors, attentive staff, and a charming atmosphere; this restaurant exceeded all expectations!",
      },
];

const Review = () => {
    return (
        <section className="review">
          <div className='review-container'>
            <div className="review-header">
              <h2>What peoplel say about us!</h2>
            </div>
            <div className='review-cards'>
              {reviews.map((review) => (
                <div key={review.id} className="review-items">
                  <div className="review-content">
                    <p className='review-rating'><FontAwesomeIcon icon={faStar} />{review.rating}</p>
                    <img src={review.image} alt={review.name} />
                    <p>{review.name}</p>
                    <p>
                      <FontAwesomeIcon icon={faQuoteLeft} />
                      {review.review}
                      <FontAwesomeIcon icon={faQuoteRight} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    )
}

export default Review;