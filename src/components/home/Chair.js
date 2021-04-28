import React, { useState, useEffect } from "react";
import { getCategory } from "../../functions/category";
import ProductCard from "../../components/cards/ProductCard";
import LoadingCard from "../cards/LoadingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CategoryHome = ({ match }) => {
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      arrows:false
    };

  useEffect(() => {
    setLoading(true);
    getCategory('chairs').then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setCategory(res.data.category);
      setProducts(res.data.products);
      setLoading(false);
    });
  }, [page]);

  return ( 
      <>
     <div className="container">
     {loading ? (
       <LoadingCard count={3} />
     ) : (
       
        <div ><Slider {...settings}>
        {products.map((p) => (
          
            <div className="col-md-4" key={p._id}> <ProductCard product={p} /></div>
          
        ))}
        </Slider>
      </div>
      
     )}
   </div>
   </>
  );
};

export default CategoryHome;
