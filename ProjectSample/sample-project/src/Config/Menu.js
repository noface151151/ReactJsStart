var shortid = require('shortid')

const Menu = [
  {
    id:shortid.generate(),
    parentPath: null,
    iconClass: null,
    display: "Tổng quan",
    IsHome:false,
    IsMenuCategory: true,
    isHasSubmenu: false,
    subMenu: null
  },
  {
    id:shortid.generate(),
    parentPath: "/",
    iconClass: "icon fa fa-home",
    display: "Trang chủ",
    IsHome:true,
    IsMenuCategory: false,
    isHasSubmenu: false,
    subMenu: null,
    IsExact:true
  },
  {
    id:shortid.generate(),
    parentPath: "/DonHang",
    iconClass: "icon fa fa-tag",
    display: "Đơn hàng",
    IsHome:false,
    IsMenuCategory: false,
    isHasSubmenu: true,
    subMenu: [
      {
        id:shortid.generate(),
        subMenuPath: "/DanhSach",
        display: "Danh sách đơn hàng"
      },
      {
        id:shortid.generate(),
        subMenuPath: "/Them",
        display: "Thêm mới"
      }
    ]
  },
  {
    id:shortid.generate(),
    parentPath: "/SanPham",
    iconClass: "icon fa fa-shopping-bag",
    display: "Sản phẩm",
    IsHome:false,
    IsMenuCategory: false,
    isHasSubmenu: true,
    subMenu: [
      {
        id:shortid.generate(),
        subMenuPath: "/DanhSach",
        display: "Danh sách sản phẩm"
      },
      {
        id:shortid.generate(),
        subMenuPath: "/DanhMuc",
        display: "Danh mục sản phẩm"
      },
      {
        id:shortid.generate(),
        subMenuPath: "/Them",
        display: "Thêm mới sản phẩm"
      }
    ]
  },
  {
    id:shortid.generate(),
    parentPath: "/KhachHang",
    iconClass: "icon fa fa-user",
    display: "Khách hàng",
    IsHome:false,
    IsMenuCategory: false,
    isHasSubmenu: false,
    subMenu: null
  },
  {
    id:shortid.generate(),
    parentPath: "/XuatNhapKho",
    iconClass: "icon fa fa-archive",
    display: "Xuất nhập kho",
    IsHome:false,
    IsMenuCategory: false,
    isHasSubmenu: false,
    subMenu: null
  },
  {
    id:shortid.generate(),
    parentPath: null,
    iconClass: null,
    display: "Báo cáo",
    IsHome:false,
    IsMenuCategory: true,
    isHasSubmenu: false,
    subMenu: null
  },
  {
    id:shortid.generate(),
    parentPath: "/BaoCaoBanHang",
    iconClass: "icon fa fa-dollar",
    display: "Báo cáo bán hàng",
    IsHome:false,
    IsMenuCategory: false,
    isHasSubmenu: false,
    subMenu: null
  },
  {
    id:shortid.generate(),
    parentPath: "/BaoCaoBanHang",
    iconClass: "icon fa fa-pie-chart",
    display: "Báo cáo tồn kho",
    IsHome:false,
    IsMenuCategory: false,
    isHasSubmenu: false,
    subMenu: null
  },
  {
    id:shortid.generate(),
    parentPath: null,
    iconClass: null,
    display: "Hệ thống",
    IsHome:false,
    IsMenuCategory: true,
    isHasSubmenu: false,
    subMenu: null
  },
  {
    id:shortid.generate(),
    parentPath: "/HoSoShop",
    iconClass: "icon fa fa-cog",
    display: "Hồ sơ shop",
    IsHome:false,
    IsMenuCategory: false,
    isHasSubmenu: false,
    subMenu: null
  },
  {
    id:shortid.generate(),
    parentPath: "/NhanVien",
    iconClass: "icon fa fa-users",
    display: "Nhân viên",
    IsHome:false,
    IsMenuCategory: false,
    isHasSubmenu: true,
    subMenu: [
      {
        id:shortid.generate(),
        subMenuPath: "/QuanLy",
        display: "Danh sách nhân viên"
      },
      {
        id:shortid.generate(),
        subMenuPath: "/Them",
        display: "Thêm mới"
      }
    ]
  },
  {
    id:shortid.generate(),
    parentPath: "/ThongBao",
    iconClass: "icon fa fa-info-circle",
    display: "Thông báo",
    IsHome:false,
    IsMenuCategory: false,
    isHasSubmenu: false,
    subMenu: null
  },
  {
    id:shortid.generate(),
    parentPath: "/RiengTu",
    iconClass: "icon fa fa-user-secret",
    display: "Riêng tư",
    IsHome:false,
    IsMenuCategory: false,
    isHasSubmenu: false,
    subMenu: null
  },
  {
    id:shortid.generate(),
    parentPath: "/CaiDat",
    iconClass: "icon fa fa-power-off",
    display: "Cài đặt chung",
    IsHome:false,
    IsMenuCategory: false,
    isHasSubmenu: false,
    subMenu: null
  }
];

export default Menu;
