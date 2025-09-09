import { bannerPequenoCmsProps as defaultProps } from "../../mock/common/bannerpequeno-mock";
import styles from "./BannerPequeno.module.scss";

export interface BannerPequenoProps {
  banners?: Array<{
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    link?: {
      href: string;
      title: string;
    };
  }>;
}

const BannerPequeno = (props: BannerPequenoProps) => {
  const { banners } = {...props, ...defaultProps};
  console.log({ banners });
  return (
    <section className={styles["banner-pequeno-container"]}>
      <div className={styles["banner-pequeno-grid"]}>
        {banners?.map((banner, index) => (
          <div key={index} className={styles["banner-pequeno-item"]}>
            {banner.link ? (
              <a
                href={banner.link.href}
                title={banner.link.title}
                className={styles["banner-pequeno-link"]}
              >
                <img
                  src={banner.image.src}
                  alt={banner.image.alt}
                  width={banner.image.width}
                  height={banner.image.height}
                  className={styles["banner-pequeno-image"]}
                />
              </a>
            ) : (
              <img
                src={banner.image.src}
                alt={banner.image.alt}
                width={banner.image.width}
                height={banner.image.height}
                className={styles["banner-pequeno-image"]}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerPequeno;
