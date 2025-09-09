import { BannerPequenoProps } from "../../template/BannerPequeno";

const bannerPequenoMock = {
  banners: [
    {
      image: {
        src: "https://fakeimg.pl/600x200",
        alt: "Banner promocional",
        width: 600,
        height: 200,
      },
      link: {
        href: "/promocao",
        title: "Ver promoção",
      },
    },
  ],
};

export const bannerPequenoCmsProps: BannerPequenoProps = {
  banners: bannerPequenoMock.banners,
};
