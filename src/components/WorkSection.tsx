import CategorySection from "./CategorySection";

const brandProjects = [
  {
    title: "YOKAL",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/009e0321-0a76-4708-8b55-f2bd985c0f86_rwc_52x0x2292x1792x2292.png?h=53ff81ce5031598e02bde66506a4226b",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/EtigXRPuBzo/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "SWIMSTER UK",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/27a2cd0f-8da9-48ff-804f-9cc8129a9170_rwc_52x0x2292x1792x2292.png?h=fd32cd3eb6b29820a92200d4f5f062c0",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/GgEIuCtxjoZ/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "SND Accountants UK",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/cde66488-ff15-4442-94e8-1578f053191c_rwc_109x238x2183x1707x2183.jpg?h=cced937c00b9b374ce79f06b8c0060ac",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/PkfaAFha8ar/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Gleam Clinic",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/fffc5a2b-1d19-4879-bdbf-5a49a3d7899f_rwc_109x238x2183x1707x2183.jpg?h=11e3164eaf8dd4a1277cb1d11a4768ca",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/EHY9GPuYec-/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Hair Dr. UK",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/c1bc962a-2f55-48aa-a494-3fe048ab5884_rwc_0x76x2400x1876x2400.png?h=f70ff2bd187f7b42bfc6b76360bf46db",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/KSaTwMYg7nI/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Evoque",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/b22e4cbe-8866-4d0a-8c40-6af1f3171525_rwc_52x0x2292x1792x2292.png?h=9b537f706afcc21309acd69931a80b49",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/QtQ9NAEYoIH/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
];

const restaurantProjects = [
  {
    title: "WILLY'S",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/27a2cd0f-8da9-48ff-804f-9cc8129a9170_rwc_52x0x2292x1792x2292.png?h=fd32cd3eb6b29820a92200d4f5f062c0",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/EuaMzTWRDd3/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "TAJINE Restaurant",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/009e0321-0a76-4708-8b55-f2bd985c0f86_rwc_52x0x2292x1792x2292.png?h=53ff81ce5031598e02bde66506a4226b",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/FYVezdx3vYj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Chili's",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/cde66488-ff15-4442-94e8-1578f053191c_rwc_109x238x2183x1707x2183.jpg?h=cced937c00b9b374ce79f06b8c0060ac",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/KtnHEof8c_H/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Sapporo Restaurant",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/fffc5a2b-1d19-4879-bdbf-5a49a3d7899f_rwc_109x238x2183x1707x2183.jpg?h=11e3164eaf8dd4a1277cb1d11a4768ca",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/8_HAZ7m_Xi_/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Mamma Mia Kitchen",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/c1bc962a-2f55-48aa-a494-3fe048ab5884_rwc_0x76x2400x1876x2400.png?h=f70ff2bd187f7b42bfc6b76360bf46db",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/NXIFUJCK4vg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Burger Daddy UK",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/b22e4cbe-8866-4d0a-8c40-6af1f3171525_rwc_52x0x2292x1792x2292.png?h=9b537f706afcc21309acd69931a80b49",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/5Jq6B3qqNCy/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
];

const hotelProjects = [
  {
    title: "Four Seasons Cairo",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/009e0321-0a76-4708-8b55-f2bd985c0f86_rwc_52x0x2292x1792x2292.png?h=53ff81ce5031598e02bde66506a4226b",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/Fyn9CDqLbmt/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Cairo Sheraton",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/27a2cd0f-8da9-48ff-804f-9cc8129a9170_rwc_52x0x2292x1792x2292.png?h=fd32cd3eb6b29820a92200d4f5f062c0",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/Be-ApyucPDt/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Hilton Alexandria",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/cde66488-ff15-4442-94e8-1578f053191c_rwc_109x238x2183x1707x2183.jpg?h=cced937c00b9b374ce79f06b8c0060ac",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/LiXGD9LFEw_/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Hilton Grand Nile",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/fffc5a2b-1d19-4879-bdbf-5a49a3d7899f_rwc_109x238x2183x1707x2183.jpg?h=11e3164eaf8dd4a1277cb1d11a4768ca",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/PJPfIvkMi2I/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Hilton Heliopolis",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/c1bc962a-2f55-48aa-a494-3fe048ab5884_rwc_0x76x2400x1876x2400.png?h=f70ff2bd187f7b42bfc6b76360bf46db",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/KIkMrP6IyKn/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
  {
    title: "Sofitel Downtown & El Gezirah",
    thumbnail: "https://cdn.myportfolio.com/b376062f-46cf-4bbd-a8f8-1ce58de2ba6c/b22e4cbe-8866-4d0a-8c40-6af1f3171525_rwc_52x0x2292x1792x2292.png?h=9b537f706afcc21309acd69931a80b49",
    videoUrl: "https://www-ccv.adobe.io/v1/player/ccv/UakqCuiydkK/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
  },
];

const WorkSection = () => {
  return (
    <div id="work">
      <CategorySection id="brands" title="Brands" projects={brandProjects} />
      <CategorySection id="restaurants" title="Restaurants" projects={restaurantProjects} />
      <CategorySection id="hotels" title="Hotels" projects={hotelProjects} />
    </div>
  );
};

export default WorkSection;
