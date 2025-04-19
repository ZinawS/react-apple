import React from 'react';


const SingleProduct = ({ product }) => {
  return (
    <section
      className={`container-fluid ${product.wrapperClass} text-center pt-5 ${product.additionalClasses || ''}`}
    >
      {product.size && <div className="size mt-4">{product.size}</div>}
      {product.logo ? (
        <div className="logo pt-5">
          <img src={product.logo} alt={product.altText} />
        </div>
      ) : (
        <div className="model h1 font-weight-bold pt-5">{product.model}</div>
      )}
      {product.mottoLogo ? (
        <div className="motto">
          <img src={product.mottoLogo} alt={product.altText} />
        </div>
      ) : (
        <div className={`motto ${product.mottoClass || 'h5'}`}>{product.motto}</div>
      )}
      {product.price && <div className="price text-secondary my-1">{product.price}</div>}
      <ul className={`link-wrapper ${product.linkWrapperClass || 'my-3'} d-flex justify-content-center list-unstyled`}>
        {product.links.map((link, index) => (
          <li
            key={index}
            className={`btn ${link.className} rounded-pill ${index !== 0 ? '' : 'mx-4'} px-3 py-2`}
          >
            <a className={`${link.textClass} text-decoration-none`} href={link.href}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      {product.image && (
        <div className="image">
          <img src={product.image} alt={product.altText} />
        </div>
      )}
    </section>
  );
};

export default SingleProduct;