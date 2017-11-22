# react-mobilepay &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/densouadtech/react-mobilepay/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react-mobilepay.svg)](https://www.npmjs.com/package/react-mobilepay)

A __MobilePay__ button for your store. With all the desired properties.

## Installation

```bash
npm install react-mobilepay
```

## Example usage

```js
import React from 'react'
import MobilePay from 'react-mobilepay'

export const Payment = props => {
  return (
    <div>
      <h2>We accept:</h2>
      <MobilePay {...props} size="large" color="darkBlue" />
    </div>
  )
}

export default Payment
```

## Props

### __accepturl__: __string__;

The `accepturl` property is used to inform Nets/Dibs where to return the user
after a successfull payment has been completed.

---

### __action?__: __string__;

__default__: `"https://payment.architrade.com/paymentweb/start.action"`

The `action` is used for defining which desitnation to access at Nets/Dibs.

---

### __amount__: __number__;

The amount to charge defined in the highest denominator. If someone want's to
spend 200 DKK the `amount` is to be set to `200`.

---

### __callbackurl__: __string__;

The destination Nets/Dibs will try and access on your side when a payment has
been completed on their side.

---

### __cancelurl__: __string__;

The destination the user should be redirected to when the choose to cancel the
payment process.

---

### __className?__: __string__;

If you would want to override some of the styles via `className`.
Due to the internal usage of `styled-components` the specificity needs to be
quite high when doing this. Because of this your usage might look like this.

```js
// Component
<MobilePay className="mobilepayButton">

//Stylesheet
.mobilepayButton.mobilepayButton {
  margin: 50px;
}
.
```

You will ever only be able to change the styles of the wrapping container
since MobilePay has a [style-guide](https://developer.mobilepay.dk/design/buttons) this library adheres to.

---

### __currency?__: __number__;

__default__: `208`

At the moment MobilePay exposes only a few currencies to be used.

__Danish Krone__:`"208"`

__Euro__:`"978"`

__Norwegian Krone__:`"578"`

__Swedish Krona__:`"752"`


These values are based upon [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217).

---

### __lang?__: __string__;

__default__: `"da"`

At the moment MobilePay exposes only a few selected languages to be used.

__Danish__:`"da"`

__Dutch__:`"nl"`

__English__:`"en"`

__Faroese__:`"fo"`

__Finnish__:`"fi"`

__French__:`"fo"`

__German__:`"de"`

__Greenlandic__:`"kl"`

__Italian__:`"it"`

__Norwegian__:`"no"`

__Polish__:`"pl"`

__Spanish__:`"es"`

__Swedish__:`"sv"`

---

### __merchant__: __number__,

The id that defines you. Example: `90407605`

---

### __orderid__: __number__;

The `orderid` that defines the currenct transaction taking place.

---

### __paytype?__: __string__;

__default__: `"MPO_Nets"`

As of now this is the only paytype that defines MobilePay when dealing with Nets/Dibs. This might change at a later date.


### __style?__: __object__;

If you would want to override some of the styles via a `style` object. This
only applies to the wrapper.

__Example__:

```js
<MobilePay style={{margin: '50px'}} />
```

## Contribute

If you have a feature request, please add it as an issue or make a pull request.
