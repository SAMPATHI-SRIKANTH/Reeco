import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchData,
  updateProductStatusSync,
  openPopUp,
  closePopUp,
} from "../../features/products/productsSlice";

import PrintIcon from "../../assets/print-icon.svg";
import SearchIcon from "../../assets/search-icon.svg";
import "./index.css";

function ProductDetails() {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const popUpOpen = useSelector((state) => state.products.popUpOpen);
  const changeProductId = useSelector(
    (state) => state.products.changeProductId
  );

  console.log(changeProductId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [dispatch, status]);

  const handleUpdateStatus = (productId, newStatus) => {
    dispatch(updateProductStatusSync({ productId, newStatus }));
    dispatch(closePopUp());
  };
  const handlePopUp = (productId) => {
    dispatch(openPopUp({ productId }));
  };
  const handleClosePopUp = () => {
    dispatch(closePopUp());
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="product-details-container">
        <div className="product-details-top">
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search.."
              className="product-search"
            />
            <img src={SearchIcon} alt="searchIcon" className="search-icon" />
          </div>
          <div className="product-details-top-right">
            <button className="add-item-btn">Add item</button>
            <img src={PrintIcon} alt="printIcon" className="print-icon" />
          </div>
        </div>
        <div className="product-details-table-container">
          <table className="product-details-table">
            <thead className="table-headings">
              <tr className="table-heading-row">
                <th></th>
                <th>Product name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="table-data-row">
                  <td className="table-data">
                    <img
                      src="src/assets/Avocado Hass.jpg"
                      className="table-img"
                    />
                  </td>
                  <td className="table-data">{product.productName}</td>
                  <td className="table-data">{product.brand}</td>
                  <td className="table-data">{product.price}</td>
                  <td className="table-data">{product.quantity}</td>
                  <td className="table-data">{product.total}</td>
                  <td className="table-data">
                    <p>{product.status}</p>
                  </td>
                  <td className="table-data table-btns-cpntainer">
                    <button
                      className="table-btns"
                      onClick={() => handleUpdateStatus(product.id, "Approved")}
                    >
                      &#x2713;
                    </button>
                    <button
                      className="table-btns"
                      onClick={() => handlePopUp(product.id)}
                    >
                      X
                    </button>
                    <button className="table-btns">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {popUpOpen && (
        <div className="overlay">
          <div className="popup-container">
            <div className="popup-top">
              <h1 className="popup-top-heading">Missing Product</h1>
              <button
                className="popup-top-close-btn"
                onClick={() => handleClosePopUp()}
              >
                X
              </button>
            </div>
            <p className="popup-text">
              Is 'Chicken Breast Fillets,Boneless...', urgent?
            </p>
            <div className="popup-btns">
              <button
                className="popup-btn-no"
                onClick={() => handleUpdateStatus(changeProductId, "Missing")}
              >
                NO
              </button>
              <button
                className="popup-btn-yes"
                onClick={() =>
                  handleUpdateStatus(changeProductId, "“Missing – Urgent")
                }
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
