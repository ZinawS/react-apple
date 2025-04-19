import React from 'react';


const ProductGrid = ({ grid }) => {
  return (
    <section className={`row ${grid.wrapperClass} text-center mb-3 mx-md-3`}>
      {grid.products.map((product) => (
        <div
          key={product.id}
          className={`${product.wrapperClass} grid-product col-md ${grid.products.indexOf(product) === 0 ? `mb-3 mb-md-0 me-md-3` : ''} ${product.additionalClasses || ''}`}
        >
          {product.size && <div className="size pt-5">{product.size}</div>}
          {product.logo ? (
            <div className="logo pt-5">
              <img src={product.logo} alt={product.altText} />
            </div>
          ) : (
            <div className="model h1 font-weight-bold">{product.model}</div>
          )}
          {product.mottoLogo ? (
            <div className="motto">
              <img src={product.mottoLogo} alt={product.altText} />
            </div>
          ) : (
            <div className={`motto ${product.mottoClass || 'h5'} py-2`}>{product.motto}</div>
          )}
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
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;