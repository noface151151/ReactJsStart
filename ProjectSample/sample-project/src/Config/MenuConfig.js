const Menu = [
  {
    path: "/",
    classNameLink: "pe-7s-home",
    name: "Trang chủ",
    classNameSubMenu: "caret",
    IsHasSubMenu: false,
    SubMenu: null
  },
  {
    path: "/Order",
    classNameLink: "pe-7s-graph",
    name: "Đơn hàng",
    classNameSubMenu: "caret",
    IsHasSubMenu: true,
    SubMenu: [
      {
        path: "/OrderList",
        name: "Danh sách đơn hàng"
      },
      {
        path: "/AddOrder",
        name: "Thêm mới"
      }
    ]
  },
  {
    path: "/Product",
    classNameLink: "pe-7s-note2",
    name: "Sản phẩm",
    classNameSubMenu: "caret",
    IsHasSubMenu: true,
    SubMenu: [
      {
        path: "/ProductList",
        name: "Danh sách sản phẩm"
      },
      {
        path: "/AddProduct",
        name: "Thêm mới "
      }
    ]
  }
];

export default Menu;
