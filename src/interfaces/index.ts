export interface Product {
   id: number;
   name: string;
   descriptions: Description[];
   image: string;
}

interface Description {
   id: number;
   name: string;
}

export interface BannerItem {
   image: {
      src: string;
      alt: string;
   }
   buttonText: string;
}

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