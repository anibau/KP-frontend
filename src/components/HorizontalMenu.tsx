import React from "react";

interface HorizontalMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ isOpen, onClose }) => {
  return (
    <nav className={`main-navbar hor-menu sticky top-0 bg-black shadow z-20 ${isOpen ? '' : 'hidden'} md:block`}>
      <div className="container mx-auto">
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li className="nav-item relative group">
            <a className="nav-link flex items-center px-4 py-2 text-white hover:text-blue-500 transition-colors" href="/profile">
              <i className="ti ti-home mr-2"></i>
              DASHBOARD
            </a>
          </li>
          <li className="nav-item relative group">
            <a className="nav-link with-sub flex items-center px-4 py-2 text-white hover:text-blue-500 transition-colors cursor-pointer" href="#">
              <i className="ti ti-wallet mr-2"></i>
              LEADS
            </a>
            <ul className="nav-sub absolute left-0 mt-2 w-48 bg-white shadow-lg rounded hidden group-hover:block">
              <li className="nav-sub-item">
                <a className="nav-sub-link block px-4 py-2 hover:bg-gray-100" href="/leads">Listado de leads</a>
              </li>
              <li className="nav-sub-item">
                <a className="nav-sub-link block px-4 py-2 hover:bg-gray-100" href="/crypto-market">Transferir</a>
              </li>
            </ul>
          </li>
          <li className="nav-item relative group">
            <a className="nav-link with-sub flex items-center px-4 py-2 text-white hover:text-blue-500 transition-colors cursor-pointer" href="#">
              <i className="ti ti-shopping-cart-full mr-2"></i>
              PROSPECTOS
            </a>
            <ul className="nav-sub absolute left-0 mt-2 w-56 bg-white shadow-lg rounded hidden group-hover:block">
              <li className="nav-sub-item">
                <a className="nav-sub-link block px-4 py-2 hover:bg-gray-100" href="/ecommerce-dashboard">Dashboard</a>
              </li>
              <li className="nav-sub-item">
                <a className="nav-sub-link block px-4 py-2 hover:bg-gray-100" href="/ecommerce-products">Products</a>
              </li>
              <li className="nav-sub-item">
                <a className="nav-sub-link block px-4 py-2 hover:bg-gray-100" href="/ecommerce-product-details">Product Details</a>
              </li>
              <li className="nav-sub-item">
                <a className="nav-sub-link block px-4 py-2 hover:bg-gray-100" href="/ecommerce-cart">Cart</a>
              </li>
              <li className="nav-sub-item">
                <a className="nav-sub-link block px-4 py-2 hover:bg-gray-100" href="/ecommerce-checkout">Checkout</a>
              </li>
              <li className="nav-sub-item">
                <a className="nav-sub-link block px-4 py-2 hover:bg-gray-100" href="/ecommerce-orders">Orders</a>
              </li>
              <li className="nav-sub-item">
                <a className="nav-sub-link block px-4 py-2 hover:bg-gray-100" href="/ecommerce-account">Account</a>
              </li>
            </ul>
          </li>
        </ul>
        {/* Botón para cerrar el menú en mobile */}
        <button className="md:hidden absolute top-2 right-2 text-white" onClick={onClose} aria-label="Cerrar menú">
          ✕
        </button>
      </div>
    </nav>
  );
};

export default HorizontalMenu;
