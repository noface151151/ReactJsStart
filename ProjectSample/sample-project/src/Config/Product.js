var shortid = require("shortid");
const Products = [
  {
    id: shortid.generate(),
    name: "Chuối già",
    Description: "Chuối già dở",
    Price: 20000,
    Images: [
      {
        Link: "https://znews-photo.zadn.vn/w660/Uploaded/ywfau/2014_10_26/chuoicothatsutotnhubannghi0.jpg",
        IsDefault: true
      },
      {
        Link: "https://znews-photo.zadn.vn/w660/Uploaded/ywfau/2014_10_26/chuoicothatsutotnhubannghi0.jpg",
        IsDefault: false
      }
    ]
  },
  {
    id: shortid.generate(),
    name: "Chuối trẻ",
    Description: "Chuối trẻ ngon hơn chuối già",
    Price: 10000,
    Images: [
      {
        Link: "http://www.voismagazine.com.au/wp-content/uploads/2016/07/chuoi.jpg",
        IsDefault: true
      },
      {
        Link: "http://www.voismagazine.com.au/wp-content/uploads/2016/07/chuoi.jpg",
        IsDefault: false
      }
    ]
  },
  {
    id: shortid.generate(),
    name: "Táo sa mạc",
    Description: "Táo trồng ở sa mạc Sahara",
    Price: 1000000,
    Images: [
      {
        Link: "http://bizweb.dktcdn.net/100/083/428/products/trai-cay-nhap-khau-fruitsandgreens-tao-xanh-my.jpg?v=1478845345270",
        IsDefault: true
      },
      {
        Link: "http://bizweb.dktcdn.net/100/083/428/products/trai-cay-nhap-khau-fruitsandgreens-tao-xanh-my.jpg?v=1478845345270",
        IsDefault: false
      }
    ]
  },
  {
    id: shortid.generate(),
    name: "Táo đại dương",
    Description: "Táo trồng ở biển Caribe",
    Price: 1000000,
    Images: [
      {
        Link: "https://vtv1.mediacdn.vn/thumb_w/650/2018/4/4/anh-1-tao-1-15228175859241411126029.jpg",
        IsDefault: true
      },
      {
        Link: "https://vtv1.mediacdn.vn/thumb_w/650/2018/4/4/anh-1-tao-1-15228175859241411126029.jpg",
        IsDefault: false
      }
    ]
  }
];

export default Products
