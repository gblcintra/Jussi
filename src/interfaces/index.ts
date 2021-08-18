export interface Photo {
   id: number;
   src: {
      small: string;
   };
   photographer_url: string;
   photographer: string;

}
export interface Response {
   photos: Photo[];
}
export interface BannerItem {
   image: {
      src: string;
      alt: string;
   }
   buttonText: string;
}
export interface ItensLink {
   src: string,
   alt: string,
   url: string
}
export interface Product {
   name: string;
   descriptions: Description[];
   image: string;
}

interface Description {
   name: string;
}