// i18n.js
import { createI18n } from 'vue-i18n'

// Define your translations
const messages = {
  sr: {
    head: {
      title: 'Panić Plast',
      job: 'Izrada proizvoda od plastike',
      description:
        'Plasticni rezervoari, plasticne septicke jame, plasticni pontoni, plasticne kace, plasticne cevi. Za domacinstva i proizvodnje. Kvalitetno, povoljno, dugotrajno i ekoloski ispravno.'
    },
    nav: {
      home: 'Pocetna',
      products: 'Proizvodi',
      gallery: 'Galerija',
      about: 'O nama',
      contact: 'Kontakt',
      fb: 'Facebook stranica',
      ig: 'Instagram profil',
      email: 'E-mail adresa',
      phone: 'Broj telefona'
    },
    cover: {
      actionWord_1: 'Povoljni',
      actionWord_2: 'Kvalitetni',
      actionWord_3: 'Dugotrajni',
      actionWord_4: 'Ekoloski',
      title: 'proizvodi od plastike',
      button: 'Katalog proizvoda',
      scroll: 'Skroluj na dole do sledece sekcije'
    },
    prod_desc: {
      subtitle_1: 'Ekoloski prihvatljivi',
      subtitle_2: 'Proizvodi za domacinstva, poljopriveru i drugo',
      subtitle_3: 'Kvalitet i dugotrajnost'
    },
    top_prods: {
      title: 'Top 3 proizvoda',
      button: 'Svi proizvodi'
    },
    about: {
      about_products: 'O proizvodima',
      our_products: 'Visok kvalitet',
      our_products_text:
        'Naši proizvodi su napravljeni od najkvalitetnijih materijala i dizajnirani su da izdrže najteže uslove životne sredine. Takođe su dizajnirani da se lako instaliraju i održavaju, što garantuje da će trajati dugi niz godina.',
      transport: 'Prevoz na vasu adresu',
      transport_text:
        'Nudimo vam i prevoz plasticnih proizvoda na vasu adresu. Pored prevoza takodje dobijate i instrukcije kako da montirate ili ukopate rezervoar, septicku jamu ili ponton.'
    },
    footer: {
      webdak: 'Izrada veb-sajtova',
      rights: 'Sva prava zadrzana.'
    },
    form: {
      title: 'Posaljite nam poruku',
      name: 'Ime',
      message: 'Poruka',
      submit: 'Posalji',
      success: 'Uspesno ste poslali poruku!',
      required: 'Ovo polje je obavezno',
      required_email: 'Ispravan email je obavezan',
      required_word: 'obavezno polje',
      optional_word: 'opciono polje'
    }
  },
  // WEBDAK // // // // /// // / / // /// // /
  en: {
    head: {
      title: 'Panic Plast',
      job: 'Production of plastic products',
      description:
        'Plastic tanks, plastic septic tanks, plastic pontoons, plastic tubs, plastic pipes. For households and production. High-quality, affordable, long-lasting and environmentally friendly.'
    },
    nav: {
      home: 'Home',
      products: 'Products',
      gallery: 'Gallery',
      about: 'About Us',
      contact: 'Contact',
      fb: 'Facebook page',
      ig: 'Instagram profile',
      email: 'Email address',
      phone: 'Phone number'
    },
    cover: {
      actionWord_1: 'Cost-effective',
      actionWord_2: 'Quality',
      actionWord_3: 'Long-lasting',
      actionWord_4: 'Ecological',
      title: 'plastic products',
      button: 'Products catalog',
      scroll: 'Scroll Down to the next section'
    },
    prod_desc: {
      subtitle_1: 'Environmentally friendly',
      subtitle_2: 'Products for home, agriculture, and more',
      subtitle_3: 'Quality and long-lasting'
    },
    top_prods: {
      title: 'Top 3 products',
      button: 'All products'
    },
    about: {
      about_products: 'About products',
      about_products_text:
        'Plastic reservoirs, septic tanks, pontoons and other products are made by spiral winding technology of high-density polyethylene (HDPE) and polypropylene (HDPP). Resistant to impacts, aggressive chemicals, suitable for burying partially or completely, and as such represent an ideal and long-term investment. They are practical, easy to manipulate and install, and they guarantee waterproofness and a long-lasting solution, because the material loses only 5% of its properties after 50 years of use. Any plastic product can be fitted with various accessories such as valves, faucets, level indicators, external or internal threaded connections, overflows, inspection openings, chokes, anchoring feet, climbing frames and everything else according to your needs. /nYou can find more details on the Products page, where all our products are presented.',
      our_products: 'High quality',
      our_products_text:
        'Our products are made from the highest quality materials and are designed to withstand the toughest environmental conditions. They are also designed to be easy to install and maintain, which ensures that they will last for many years to come.',
      transport: 'Delivery to your address',
      transport_text:
        'We also offer transportation of plastic products to your address. In addition to transportation, you also receive instructions on how to mount or bury a tank, septic tank or pontoon.'
    },
    footer: {
      webdak: 'Website creation',
      rights: 'All Rights Reserved.'
    },
    form: {
      title: 'Send us a message',
      name: 'Name',
      message: 'Message',
      submit: 'Submit',
      success: 'Your message is sent successfully!',
      required: 'This field is required',
      required_email: 'A valid email is required',
      required_word: 'required field',
      optional_word: 'optional field'
    }
  }
}

// Create an i18n instance with the defined messages and default locale
const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'sr', // Set the default locale
  fallbackLocale: 'sr',
  messages // Set the translation messages
})

export default i18n
